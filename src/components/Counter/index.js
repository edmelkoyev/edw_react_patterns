import React from 'react'

class Counter extends React.Component {
  constructor (props) {
    super(props)
    this.state = { count: this.props.count ? this.props.count : 0 }
    this.decrementHandler = this.decrementHandler.bind(this)
    this.incrementHandler = this.incrementHandler.bind(this)
  }

  get count() {
    return this.isControlled ? this.props.count : this.state.count;
  }

  get step() {
    return this.props.step ? this.props.step : 1;
  }

  get isControlled() {
    return this.props.count !== undefined && this.props.onChange !== undefined;
  }

  change = direction => {
    const value = direction * this.step;
  
    if (this.isControlled) {
      this.props.onChange( { count: this.props.count + value });
    } else {
      this.setState(state => ({count: state.count + value}))
    }
  }

  incrementHandler = () => this.change(1);

  decrementHandler = () => this.change(-1)


  render () {
    return (
      <div>
        <button onClick={ this.decrementHandler }>DEC</button>
        <span>{this.count}</span>
        <button onClick={ this.incrementHandler }>INC</button>
      </div>
    )
  }
}

export default Counter
