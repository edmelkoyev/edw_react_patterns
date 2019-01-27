import React from 'react'
import './App.css'
import Counter from './components/Counter'

class App extends React.Component {
  sendAnalytics = () => console.log('CLICK: Send to analytics');

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Counter</h1>
          <hr/>
          <Counter step={ 1 }>
            { ( { getCounterProps, stepVal } ) => {
              
                const counterProps = getCounterProps({
                  appendOnClick: this.sendAnalytics, 
                  map: num => num * 2
                });
                
                return (
                  <div data-step-val={ stepVal } data-count-val={ counterProps.count }>
                    <button onClick={ counterProps.decrementHandler }>DEC</button>
                    <span>{ counterProps.count }</span>
                    <button onClick={ counterProps.incrementHandler }>INC</button>
                    <button onClick={ counterProps.incrementHandler2 }>2xINC</button>
                  </div>
                )
              }
            }
          </Counter>
        </header>
      </div>
    )
  }
}

export default App
