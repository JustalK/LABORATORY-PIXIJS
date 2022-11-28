import { CustomPIXIComponent } from 'react-pixi-fiber';
import * as PIXI from 'pixi.js';

export default CustomPIXIComponent(
  {
    customDisplayObject: (props: any) => {
      return new PIXI.SimplePlane(
        PIXI.Texture.from('http://localhost:4200/assets/bg_grass.jpg'),
        10,
        10
      );
    },
  },
  'Simple'
);
