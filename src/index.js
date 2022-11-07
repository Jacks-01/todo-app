import React from 'react';
import ReactDOM from 'react-dom/client';
import SettingsProvider from './Context/Settings/'
import AuthProvider from './Context/Auth';

import App from './app';

import { MantineProvider } from '@mantine/core';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Settings from './routes/Settings/Settings';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AuthProvider>
        <SettingsProvider>
          <RouterProvider router={router} />
        </SettingsProvider>
      </AuthProvider>
    </MantineProvider>
  </React.StrictMode>
);