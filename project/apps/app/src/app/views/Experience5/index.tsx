import * as React from 'react';
import { Stage, Container } from 'react-pixi-fiber';
import RotatingBunny from './MovingBunny';

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
      <Container x={300} y={300}>
        <RotatingBunny />
      </Container>
    </Stage>
  );
}

export default App;
