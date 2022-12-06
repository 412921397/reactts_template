import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import routes from './router/routers';

function App() {
  return (
    <div className="App">
      app
      <Suspense fallback="loading...">
        <div>{useRoutes(routes)}</div>
      </Suspense>
    </div>
  );
}

export default App;
