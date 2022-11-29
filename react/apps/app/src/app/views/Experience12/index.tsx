import { useEffect, useRef } from 'react';
import * as PIXI from 'pixi.js';

const app = new PIXI.Application({
  width: 800,
  height: 600,
  backgroundColor: 0x5bba6f,
});

export function App() {
  const ref = useRef<any>();

  useEffect(() => {
    // On first render add app to DOM
    ref.current.appendChild(app.view);
    // Start the PixiJS app
    app.start();

    const circle = app.stage.addChild(
      new PIXI.Graphics()
        .beginFill(0xffffff)
        .lineStyle({ color: 0x111111, alpha: 0.87, width: 1 })
        .drawCircle(0, 0, 8)
        .endFill()
    );
    circle.position.set(app.screen.width / 2, app.screen.height / 2);

    // Enable interactivity!
    app.stage.interactive = true;

    // Make sure the whole canvas area is interactive, not just the circle.
    app.stage.hitArea = app.screen;

    // Follow the pointer
    app.stage.addEventListener('pointermove', (e: any) => {
      circle.position.copyFrom(e.global);
    });

    return () => {
      // On unload stop the application
      app.stop();
    };
  }, []);

  return <div ref={ref} />;
}

export default App;
