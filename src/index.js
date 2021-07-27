import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './styles/scss/style.scss';
import 'react-credit-cards/es/styles-compiled.css';

import { ThemeProvider } from '@material-ui/core';
import { theme } from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>      
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
