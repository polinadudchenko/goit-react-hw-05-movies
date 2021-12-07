import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.styled';
import { Global } from '@emotion/react';
import { GlobalStyles } from './index.styled';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Global styles={GlobalStyles} />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
