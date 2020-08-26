import React from 'react';
import { Canvas, Container } from './styled'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  state = {
    window: <Canvas width={this.props.width} height={this.props.height}></Canvas>,
    snake: {
      size: 20,
      length: 0,
      color: 'green',
      x: 0,
      y: 0
    }
  }

  componentDidMount() {
    const canvas = document.getElementsByTagName('canvas')
    const ctx = canvas
  }

  render() {
    return(
      <Container>
        <div>Best Record</div>
        <div>Eaten apples</div>
        <h1>The Game</h1>
        {this.state.window}
      </Container>
    )
  }
}

export default Game;