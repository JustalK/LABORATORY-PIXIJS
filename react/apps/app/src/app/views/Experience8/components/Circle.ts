import { CustomPIXIComponent } from 'react-pixi-fiber';
import * as PIXI from 'pixi.js';

const TYPE = 'Circle';
export const behavior = {
  customDisplayObject: (props: any) => new PIXI.Graphics(),
  customApplyProps: function (instance: any, oldProps: any, newProps: any) {
    const { fill, x, y, radius } = newProps;
    instance.lineStyle(0); // draw a circle, set the lineStyle to zero so the circle doesn't have an outline
    instance.beginFill(fill, 1);
    instance.drawCircle(x, y, radius);
    instance.endFill();
  },
};
export default CustomPIXIComponent(behavior, TYPE);
