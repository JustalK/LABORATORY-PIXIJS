import { Container } from 'react-pixi-fiber';
import Rectangle from './components/Rectangle';
import Circle from './components/Circle';

export function App() {
  return (
    <Container>
      <Rectangle x={50} y={50} width={100} height={100} fill={0xffff00} />
      <Circle x={250} y={150} width={100} radius={100} fill={0xffff00} />
    </Container>
  );
}

export default App;
