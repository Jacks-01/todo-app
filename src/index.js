import React from 'react';
import ReactDOM from 'react-dom/client';
import SettingsProvider from './Context/Settings/'
import AuthProvider from './Context/Auth';

import App from './app';

import { MantineProvider } from '@mantine/core';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <SettingsProvider>
          <App />
        </SettingsProvider>
      </MantineProvider>
    </AuthProvider>
  </React.StrictMode>
);