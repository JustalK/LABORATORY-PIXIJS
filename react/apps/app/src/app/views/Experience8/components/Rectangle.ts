import { CustomPIXIComponent } from 'react-pixi-fiber';
import * as PIXI from 'pixi.js';

const TYPE = 'Rectangle';
export const behavior = {
  customDisplayObject: (props: any) => new PIXI.Graphics(),
  customApplyProps: function (instance: any, oldProps: any, newProps: any) {
    const { fill, x, y, width, height } = newProps;
    instance.clear();
    instance.beginFill(fill);
    instance.drawRect(x, y, width, height);
    instance.endFill();
  },
};
export default CustomPIXIComponent(behavior, TYPE);
