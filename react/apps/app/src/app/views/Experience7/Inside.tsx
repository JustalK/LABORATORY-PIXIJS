import { useState, useEffect } from 'react';
import { Container, BitmapText } from 'react-pixi-fiber';
import * as PIXI from 'pixi.js';

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
      {isLoaded && (
        <BitmapText
          anchor={0.5}
          x={250}
          y={150}
          text="Hello World!"
          style={{ fontName: 'Desyrel', fontSize: 50 }}
        />
      )}
    </Container>
  );
}

export default App;
