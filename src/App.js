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
            { ( { count, decrementHandler, incrementHandler, incrementHandler2 } ) => 
              <div>
                <button onClick={ decrementHandler }>DEC</button>
                <span>{ count }</span>
                <button onClick={ incrementHandler }>INC</button>
                <button onClick={ incrementHandler2 } >2xINC</button>
              </div>
            }
          </Counter>
        </header>
      </div>
    )
  }
}

export default App
