import React from 'react'
import {ACTION_INCREMENT} from '../../entities/constants'


function decrement (state, props) {
  return { count: state.count - props.step }
}

function increment (state, props) {
  console.log('updater:increment state:', state, " props", props)
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
  }

  render () {
    return this.props.children({
      getCounterProps: ({countMultiplier, sendAnalyticsHandler}) => ({
        count: countMultiplier(this.state.count),
        decrementHandler: this.decrementHandler,
        incrementHandler: () => {
          this.incrementHandler();
          sendAnalyticsHandler(ACTION_INCREMENT);
        }
      })
    });
  }
}

export default Counter
