import * as React from 'react';
import { Sprite } from 'react-pixi-fiber';
import * as PIXI from 'pixi.js';

const bunny = 'http://localhost:4200/assets/bunny.png';
const centerAnchor = new PIXI.Point(0.5, 0.5);

function Bunny({ ...props }) {
  return (
    <Sprite
      anchor={centerAnchor}
      texture={PIXI.Texture.from(bunny)}
      {...props}
    />
  );
}

export default Bunny;
