import { useRef, useEffect } from 'react';
import { Stage, Container, Text } from 'react-pixi-fiber';
import * as PIXI from 'pixi.js';

const width = 500;
const height = 500;
const options = {
  backgroundColor: 0x56789a,
  resolution: window.devicePixelRatio,
  width: width,
  height: height,
};
const styleW = {
  width: width,
  height: height,
};

const style = new PIXI.TextStyle({
  fontFamily: 'Arial',
  fontSize: 36,
  fontStyle: 'italic',
  fontWeight: 'bold',
  fill: ['#ffffff', '#00ff99'], // gradient
  stroke: '#4a1850',
  strokeThickness: 5,
  dropShadow: true,
  dropShadowColor: '#000000',
  dropShadowBlur: 4,
  dropShadowAngle: Math.PI / 6,
  dropShadowDistance: 6,
  wordWrap: true,
  wordWrapWidth: 440,
  lineJoin: 'round',
});

const skewStyle = new PIXI.TextStyle({
  fontFamily: 'Arial',
  dropShadow: true,
  dropShadowAlpha: 0.8,
  dropShadowAngle: 2.1,
  dropShadowBlur: 4,
  dropShadowColor: '0x111111',
  dropShadowDistance: 10,
  fill: ['#ffffff'],
  stroke: '#004620',
  fontSize: 60,
  fontWeight: 'lighter',
  lineJoin: 'round',
  strokeThickness: 12,
});

export function App() {
  const mytext = useRef<any>();

  useEffect(() => {
    if (mytext.current) {
      mytext.current.skew.set(0.65, -0.3);
      mytext.current.anchor.set(0.5, 0.5);
    }
  }, []);

  return (
    <Stage options={options} style={styleW}>
      <Container>
        <Text x={0} y={0} text="Hello world!" />
        <Text x={0} y={100} text="Hello world!" style={style} />
        <Text
          ref={mytext}
          x={0}
          y={200}
          text="Hello world!"
          style={skewStyle}
        />
      </Container>
    </Stage>
  );
}

export default App;
