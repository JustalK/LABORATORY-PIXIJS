import { useState, useEffect } from 'react';
import { Container, BitmapText } from 'react-pixi-fiber';
import * as PIXI from 'pixi.js';
import Rectangle from './components/Rectangle';
import Circle from './components/Circle';

export function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    PIXI.Assets.load(
      'https://pixijs.io/examples/examples/assets/bitmap-font/desyrel.xml'
    ).then(() => {
      setIsLoaded(true);
    });
  }, []);

  return (
    <Container>
      <Rectangle x={50} y={50} width={100} height={100} fill={0xffff00} />
      <Circle x={250} y={150} width={100} radius={100} fill={0xffff00} />
    </Container>
  );
}

export default App;
