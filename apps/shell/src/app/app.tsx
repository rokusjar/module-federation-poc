import * as React from 'react';

import { Link, Route, Routes } from 'react-router-dom';

const Alpha = React.lazy(() => import('alpha/Module'));

const Beta = React.lazy(() => import('beta/Module'));

const Widget = React.lazy(() => import('widget/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/alpha">Alpha</Link>
        </li>

        <li>
          <Link to="/beta">Beta</Link>
        </li>

        <li>
          <Link to="/widget">Widget</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<div title="shell" />} />

        <Route path="/alpha" element={<Alpha />} />

        <Route path="/beta" element={<Beta />} />

        <Route path="/widget" element={<Widget />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
