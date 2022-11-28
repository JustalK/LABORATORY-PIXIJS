import { Route, Routes } from 'react-router-dom';
import Experiences from './views';

export default function App() {
  return (
    <>
      <div className="navigation">
        <nav>
          <ul>
            {Object.keys(Experiences).map((e, index) => (
              <li key={index}>
                <a href={`/${index + 1}`}>{e}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="content">
        <Routes>
          {Object.keys(Experiences).map((e, index) => {
            // @ts-ignore
            const Type = Experiences[e];
            return (
              <Route key={index} path={`/${index + 1}`} element={<Type />} />
            );
          })}
          <Route
            path="/"
            element={
              <span>Click on one of the experience on the left side</span>
            }
          />
        </Routes>
      </div>
    </>
  );
}
