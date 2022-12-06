import React from 'react';
import { Navigate } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

const Home = React.lazy(() => import('@/pages/home'));

const routes: RouteObject[] = [
  { path: '/', element: <Navigate to="/home" /> },
  { path: '/home', element: <Home /> }
];

export default routes;
