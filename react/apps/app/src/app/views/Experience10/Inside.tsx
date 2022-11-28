import { useRef, useEffect, useContext, useCallback } from 'react';
import { Container, AppContext } from 'react-pixi-fiber';
import Simple from './components/Simple';
import * as PIXI from 'pixi.js';

export function App() {
  const app = useContext(AppContext);
  const myPlaneRef = useRef<any>();

  const animate = useCallback((delta: any) => {
    if (myPlaneRef.current) {
      const buffer = myPlaneRef.current.geometry.getBuffer('aVertexPosition');
      for (let i = 0; i < buffer.data.length; i++) {
        buffer.data[i] += Math.sin(delta / 10 + i) * 0.5;
      }
      buffer.update();
    }
  }, []);

  useEffect(() => {
    app.ticker.add(animate);

    return () => {
      app.ticker.remove(animate);
    };
  }, [app.ticker, animate]);

  return (
    <Container>
      <Simple ref={myPlaneRef} />
    </Container>
  );
}

export default App;
