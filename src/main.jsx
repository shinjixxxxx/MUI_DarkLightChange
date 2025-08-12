// /src/main.jsx
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider
    theme={theme}
    defaultMode="system"
    disableTransitionOnChange
    noSsr
  >
    <CssBaseline enableColorScheme />
    <App />
  </ThemeProvider>
);
