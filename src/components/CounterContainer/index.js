import React from 'react'
import Counter from '../Counter'

function decrement (state, props) {
  return { count: state.count - props.step }
}

function increment (state, props) {
  console.log('updater:increment state:', state, " props", props)
  return { count: state.count + props.step }
}

class CounterContainer extends React.Component {
  constructor (props) {
    super()
    this.state = { count: 0 }
    this.decrementHandler = this.decrementHandler.bind(this)
    this.incrementHandler = this.incrementHandler.bind(this)
    this.incrementHandler2 = this.incrementHandler2.bind(this)
  }

  decrementHandler () {
    this.setState(decrement)
  }

  incrementHandler () {
    console.log('incrementHandler')
    this.setState(increment)
  }

  incrementHandler2 () {
    console.log('incrementHandler2')
    this.setState(increment)
    this.setState(increment)
  }

  render () {
    return (
      <Counter 
        count={this.state.count}
        decrementHandler = { this.decrementHandler }
        incrementHandler = { this.incrementHandler }
        incrementHandler2 = { this.incrementHandler2 }
        />
    )
  }
}

export default CounterContainer
