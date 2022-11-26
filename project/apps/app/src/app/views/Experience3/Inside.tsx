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

  const Whatever: any = () => {
    const rsl = [];
    for (let i = 0; i < 25; i++) {
      const x = (i % 5) * 40;
      const y = Math.floor(i / 5) * 40;
      rsl.push(<Bunny position={`${x}, ${y}`} />)
    }
    return rsl
  }

  React.useEffect(() => {
    app.ticker.add(animate);

    container.current.x = app.screen.width / 2;
    container.current.y = app.screen.height / 2;

    container.current.pivot.x = container.current.width / 2;
    container.current.pivot.y = container.current.height / 2;

    return () => {
      app.ticker.remove(animate);
    };
  }, [app.ticker, animate]);

  return (
    <Container ref={container}>
      <Whatever />
    </Container>
  );
}

export default App;
