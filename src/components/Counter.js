import React from 'react'

function decrement (state, props) {
  return { count: state.count + props.step }
}

function increment (state, props) {
  console.log('increment', state, props)
  return { count: state.count + props.step }
}

class Counter extends React.Component {
  constructor (props) {
    super()
    this.state = { count: 0 }
    this.decrementHandler = this.decrementHandler.bind(this)
    this.incrementHandler = this.incrementHandler.bind(this)
  }

  decrementHandler () {
    this.setState(decrement)
  }

  incrementHandler () {
    console.log('incrementHandler')
    this.setState(increment)
    this.setState(increment)
    this.setState(increment)
  }

  render () {
    return (
      <div>
        <button onClick={ this.decrementHandler }> - </button>
        <span>{this.state.count}</span>
        <button onClick={ this.incrementHandler }> + </button>
      </div>
    )
  }
}

export default Counter
