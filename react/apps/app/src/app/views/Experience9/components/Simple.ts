import { CustomPIXIComponent } from 'react-pixi-fiber';
import * as PIXI from 'pixi.js';

export default CustomPIXIComponent(
  {
    customDisplayObject: (props: any) => {
      const bunny = PIXI.Sprite.from('https://i.imgur.com/IaUrttj.png');

      bunny.anchor.set(0.5);

      bunny.x = 500 / 2;
      bunny.y = 500 / 2;

      return bunny;
    },
  },
  'Simple'
);
