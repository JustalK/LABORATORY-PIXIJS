import React, { useRef, useEffect } from 'react';
import { Stage, Container } from "react-pixi-fiber";
import RotatingBunny from "./RotatingBunny";

const width = 600;
const height = 400;
const options = {
  backgroundColor: 0x56789a,
  resolution: window.devicePixelRatio,
  width: width,
  height: height
};
const style = {
  width: width,
  height: height
};

export function App() {
  const container = useRef<any>();

  useEffect(() => {
    // container = PIXI.Sprite instance here...
    if (container.current) {
      container.current.x = width / 2;
      container.current.y = height / 2;
    }
  }, []);

  return (
    <Stage options={options} style={style}>
      <Container ref={container}>
        <RotatingBunny position="50,50" />
      </Container>
    </Stage>
  );
}

export default App;
