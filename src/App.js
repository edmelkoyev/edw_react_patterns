import React from 'react'
import './App.css'
import CounterController from './components/CounterController'

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Counter</h1>
          <CounterController />
        </header>
      </div>
    )
  }
}

export default App
