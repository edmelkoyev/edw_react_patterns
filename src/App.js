import React from 'react'
import './App.css'
import CounterContainer from './components/CounterContainer'

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Counter</h1>
          <hr/>
          <CounterContainer />
        </header>
      </div>
    )
  }
}

export default App
