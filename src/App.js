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
            { cprops => 
              <div>
                <button onClick={ cprops.decrementHandler }>DEC</button>
                <span>{ cprops.count }</span>
                <button onClick={ cprops.incrementHandler }>INC</button>
                <button onClick={ cprops.incrementHandler2 } >2xINC</button>
              </div>
            }
          </Counter>
        </header>
      </div>
    )
  }
}

export default App
