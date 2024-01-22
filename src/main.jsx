import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './pages/App.jsx';
import SignIn from './pages/SignIn.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/synergix-solutions/',
    element: <App />,
  },
  {
    path: '/synergix-solutions/sign-in/',
    element: <SignIn />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
