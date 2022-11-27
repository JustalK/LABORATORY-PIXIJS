import { Stage } from 'react-pixi-fiber';
import Inside from './Inside';

const width = 500;
const height = 500;
const options = {
  backgroundColor: 0x56789a,
  resolution: window.devicePixelRatio,
  width: width,
  height: height,
};
const style = {
  width: width,
  height: height,
};

export function App() {
  return (
    <Stage options={options} style={style}>
      <Inside />
    </Stage>
  );
}

export default App;
