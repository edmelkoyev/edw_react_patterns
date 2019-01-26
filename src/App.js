import React from 'react'
import './App.css'
import Counter from './components/Counter'

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Counter</h1>
          <hr/>
          <Counter step={ 2 }>
            <div>
              <button >DEC</button>
              <span>111</span>
              <button>INC</button>
              <button>2xINC</button>
            </div>
          </Counter>
        </header>
      </div>
    )
  }
}

export default App
