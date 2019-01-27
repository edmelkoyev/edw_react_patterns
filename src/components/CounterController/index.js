import React from 'react'
import Counter from './../Counter'

class CounterController extends React.Component {
  constructor (props) {
    super(props)
    this.state = { count: 5 }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(state) {
    this.setState( state, () => console.log('Count Controller State change: ', state.count)  );
  }

  render() {
    return (
      <React.Fragment>
        <Counter step={2} />
        <h2>Contolled Counter [{this.state.count}]</h2>
        <Counter step={1} count={this.state.count} onChange={this.handleChange} />
        <h2>Set initial count, not Contolled Counter [{this.state.count}]</h2>
        <Counter step={3} count={this.state.count}/>
      </React.Fragment>
    )
  }
}

export default CounterController
