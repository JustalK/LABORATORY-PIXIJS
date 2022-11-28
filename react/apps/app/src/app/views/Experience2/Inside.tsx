import React, { useRef, useEffect } from 'react';
import { AppContext } from "react-pixi-fiber";
import { Container } from "react-pixi-fiber";
import Bunny from "./../Bunny";

export function App() {
  const app = React.useContext(AppContext);
  const container = useRef<any>();

  const animate = React.useCallback((delta: any) => {
    // just for fun, let's rotate mr rabbit a little
    // delta is 1 if running at 100% performance
    // creates frame-independent tranformation
    container.current.rotation -= 0.01 * delta;
  }, []);

  React.useEffect(() => {
    app.ticker.add(animate);

    return () => {
      app.ticker.remove(animate);
    };
  }, [app.ticker, animate]);

  return (
    <Container position={[250, 250]} ref={container}>
      <Bunny position="0,-50" />
      <Bunny position="50,0" />
      <Bunny position="-50,0" />
      <Bunny position="0,0" />
      <Bunny position="0,50" />
    </Container>
  );
}

export default App;
