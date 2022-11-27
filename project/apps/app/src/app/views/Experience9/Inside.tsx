import { useState, useEffect } from 'react';
import { Container } from 'react-pixi-fiber';
import Simple from './components/Simple';
import * as PIXI from 'pixi.js';

export function App() {
  return (
    <Container>
      <Simple />
    </Container>
  );
}

export default App;
