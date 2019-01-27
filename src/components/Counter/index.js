import React from 'react'

function decrement (state, props) {
  return { count: state.count - props.step }
}

function increment (state, props) {
  console.log('updater:increment state:', state, " props", props)
  return { count: state.count + props.step }
}

class Counter extends React.Component {
  constructor (props) {
    super(props)
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
  }

  render () {
    return (
      <div>
        <button onClick={ this.decrementHandler }>DEC</button>
        <span>{this.state.count}</span>
        <button onClick={ this.incrementHandler }>INC</button>
      </div>
    )
  }
}

export default Counter
