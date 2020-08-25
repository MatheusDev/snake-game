import React from 'react';
import ReactDOM from 'react-dom';

// import { Container } from './styles';

function Game() {
  return(
     <h1>Electron</h1>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default Game;