import React from 'react';
import { Canvas } from './styled'


class Game extends React.Component {
  
  render() {
    return(
      <section>
        <h1>The Game</h1>
        <Canvas height="100" width="100"></Canvas>
      </section>
    )
  }
}

export default Game;