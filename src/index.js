import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './styles/scss/style.scss';
import 'react-credit-cards/es/styles-compiled.css';

import { ThemeProvider } from '@material-ui/core';
import { theme } from './styles/theme';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>      
      <App />
      <ToastContainer />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
