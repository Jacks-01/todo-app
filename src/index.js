import React from 'react';
import ReactDOM from 'react-dom/client';
import SettingsProvider from './Context/Settings/'
import AuthProvider from './Context/Auth';

import App from './app';

import { MantineProvider } from '@mantine/core';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AuthProvider>
        <SettingsProvider>
          <App />
        </SettingsProvider>
      </AuthProvider>
    </MantineProvider>
  </React.StrictMode>
);