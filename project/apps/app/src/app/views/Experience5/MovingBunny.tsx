import React, { useRef, useEffect } from 'react';
import { AppContext, Sprite } from 'react-pixi-fiber';
import Bunny from './../Bunny';
import * as PIXI from 'pixi.js';

const bunny = 'https://i.imgur.com/IaUrttj.png';
const centerAnchor = new PIXI.Point(0.5, 0.5);

// http://pixijs.io/examples/#/basics/basic.js
function RotatingBunny({ ...props }) {
  const [rotation, setRotation] = React.useState(0);
  const [i, setI] = React.useState(0);
  const app = React.useContext(AppContext);
  const iter = useRef<number>(0);

  const animate = React.useCallback((delta: any) => {
    setRotation((rotation) => rotation + 0.1 * delta);
    setI((iter.current += 0.05 * delta));
  }, []);

  React.useEffect(() => {
    app.ticker.add(animate);

    return () => {
      app.ticker.remove(animate);
    };
  }, [app.ticker, animate]);

  return (
    <Sprite
      anchor={Math.sin(i / 2)}
      x={Math.sin(i) * 100}
      y={Math.sin(i / 1.5) * 100}
      texture={PIXI.Texture.from(bunny)}
      rotation={Math.sin(i) * Math.PI}
    />
  );
}

export default RotatingBunny;
