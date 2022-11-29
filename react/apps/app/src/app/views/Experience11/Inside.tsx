import { useRef, useState, useEffect } from 'react';
import { Container, Sprite } from 'react-pixi-fiber';
import * as PIXI from 'pixi.js';

const texture = PIXI.Texture.from('http://localhost:4200/assets/cat1.png');
const secondTexture = PIXI.Texture.from(
  'http://localhost:4200/assets/cat2.png'
);
const centerAnchor = new PIXI.Point(0.5, 0.5);

export function App() {
  const mySprite = useRef<any>();
  const [isFirst, setIsFirst] = useState(true);

  const handlePointer = () => {
    mySprite.current.texture = isFirst ? secondTexture : texture;
    setIsFirst((c) => !c);
  };

  useEffect(() => {
    if (mySprite.current) {
      mySprite.current.on('pointertap', handlePointer);
    }
    return () => {
      if (mySprite.current) {
        mySprite.current.off('pointertap', handlePointer);
      }
    };
  }, [isFirst]);

  console.log(isFirst);
  return (
    <Container x={250} y={250}>
      <Sprite
        anchor={centerAnchor}
        texture={texture}
        width={150}
        height={150}
        interactive={true}
        cursor={'pointer'}
        ref={mySprite}
      />
    </Container>
  );
}

export default App;
