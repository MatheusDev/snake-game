import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalSTyle } from './style/GlobalStyle'

ReactDOM.render(
  <React.StrictMode>
    <GlobalSTyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

