/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import GlobalStyle from './styles/global';

import Routes from './routes';

const App = () => (
  <Router>

    <Routes />
    <GlobalStyle />
  </Router>
);
export default App;
