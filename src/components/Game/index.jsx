import React from 'react';
import { Canvas, Container } from './styled'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  state = {
    snake: {
      size: 20,
      length: 0,
      color: 'green',
      x: 0,
      y: 0
    }
  }
  createGame = () => {
    return document.getElementsByTagName('canvas')[0]
    .getContext('2d')
  }

  createSnake = () => {
    const { x, y, size } = this.state.snake
    const ctx = this.createGame()
    ctx.fillRect(x, y, size, size)
  }

  handleControl = () => {
    
  }
  componentDidMount() {
    this.createSnake()
  }

  render() {
    return(
      <Container>
        <div>Best Record</div>
        <div>Eaten apples</div>
        <h1>The Game</h1>
        <Canvas width={this.props.width} height={this.props.height}></Canvas>
      </Container>
    )
  }
}

export default Game;