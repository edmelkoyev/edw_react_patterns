import React from 'react'
import Counter from './../Counter'


class CounterContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {count: 0}
    this.incrementHandler = this.incrementHandler.bind(this)
    this.decrementHandler = this.decrementHandler.bind(this)
  }

  step = 1

  incrementHandler() {
    this.setState(state => ({count: state.count + this.step }) )
  }

  decrementHandler() {
    this.setState(state => ({count: state.count - this.step }) )
  }

  render() {
    return (
      <Counter 
        count={ this.state.count }
        incrementHandler={ this.incrementHandler }
        decrementHandler={ this.decrementHandler }
      />
    )
  }
}

export default CounterContainer

