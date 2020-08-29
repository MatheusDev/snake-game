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

  //handleMoving = (key) => {

  //}
  handleMoving = () => {

    //let { x, y, size } = this.state.snake
 
    

    const ArrowRight = () => {
    
    }
    const ArrowLeft = () => {

    }
    const ArrowUp = () => {
      window.setInterval(() => {
        let y = this.state.snake.y
        this.setState({...this.state.snake, y: y})
      },500)
    }
    const ArrowDown = () => {

    }

    const control = {
      ArrowRight: ArrowRight(),
      ArrowLeft: ArrowLeft(),
      ArrowUp: ArrowUp(),
      ArrowDown: ArrowDown()
    }

    window.addEventListener('keydown', tecla => {
      let { key } = tecla
      control[key]()()
      console.log(this.state.snake)
    })
    
    /*const middleware = (key) => {
      window.setInterval(() => {
        control[key]()
        console.log(this.state.snake)
      },1000)
    }*/

  }
  componentWillMount() {
    
  }
  componentDidMount() {
    this.createSnake()
    this.handleMoving()
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