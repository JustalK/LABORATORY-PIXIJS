import { CustomPIXIComponent } from 'react-pixi-fiber';
import * as PIXI from 'pixi.js';

export default CustomPIXIComponent(
  {
    customDisplayObject: (props: any) => {
      return new PIXI.SimplePlane(
        PIXI.Texture.from(
          'https://cdnb.artstation.com/p/assets/images/images/008/977/853/medium/brandon-liu-mod9-grass-bliu2.jpg'
        ),
        10,
        10
      );
    },
  },
  'Simple'
);
