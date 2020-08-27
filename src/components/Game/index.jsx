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

  getContext = () => {
    return document.getElementsByTagName('canvas')[0]
    .getContext('2d')
  }

  createSnake = () => {
    const { x, y, size } = this.state.snake
    const ctx = this.getContext()
    ctx.fillRect(x, y, size, size)
  }

  handleControl = () => {
    let { x, y, size } = this.state.snake
 
    const control = {
      ArrowRight: () => '1',
      ArrowLeft: () => this.setState({...this.state.snake, x: x++}),
      ArrowUp: () => '2',
      ArrowDown: () => '2'
    }

    function middleware(key) {
      setInterval(() => control[key](),1000)
    }

    window.addEventListener('keydown', key => {
      middleware(key.key)
      console.log(this.state.snake)
    })
  }
  
  componentDidMount() {
    this.handleControl()
    this.createSnake()
  }

  render() {
    const { width, height } = this.props
    return(
      <Container>
        <div>Best Record</div>
        <div>Eaten apples</div>
        <h1>The Game</h1>
        <Canvas width={width} height={height} ></Canvas>
      </Container>
    )
  }
}

export default Game;