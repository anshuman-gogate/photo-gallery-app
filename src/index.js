import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ContextProvider } from './Context';
import './index.css'
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <Router>
        <App />
      </Router>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);