// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { Link, Route, Routes } from 'react-router-dom';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import React, { useState } from 'react';

// const Alpha = React.lazy(() => import('alpha/Module'));
// const Beta = React.lazy(() => import('beta/Module'));
const Widget = React.lazy(() => import('widget/Module'));
// const LazyLoadedComponent = React.lazy(() => import('./LazyLoadedComponent'));

function ErrorFallback(props: FallbackProps) {
  return (
    <div role="alert">
      <p>Something went wrong when loading remote module called Widget</p>
    </div>
  );
}

export function App() {
  const [showWidget, setShowWidget] = useState(false);
  return (
    // <React.Suspense fallback={<p>Loading remote modules...</p>}>
    <div className={`${styles.Wrapper}`}>
      <div className={styles.Navigation}>
        <Link to="/">Home</Link>
        <Link to="/alpha">Alpha</Link>
        <Link to="/beta">Beta</Link>
      </div>
      <button onClick={() => setShowWidget(true)}>
        Show lazy loaded component
      </button>
      <div>
        {showWidget && (
          <React.Suspense fallback={<p>Loading remote modules...</p>}>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Widget />
            </ErrorBoundary>
          </React.Suspense>
        )}
      </div>
      {/* <Routes>
          <Route path="/" element={<div title="shell" />} />
          <Route path="/alpha" element={<Alpha />} />
          <Route path="/beta" element={<Beta />} />
        </Routes> */}
    </div>
    // </React.Suspense>
  );
}

export default App;
