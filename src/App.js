import React from 'react'
import logo from './logo.svg'
import './App.css'
import Counter from './components/Counter'

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <hr/>
          <Counter step={2} />
        </header>
      </div>
    )
  }
}

export default App
