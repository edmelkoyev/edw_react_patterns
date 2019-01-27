import React from 'react'
import './App.css'
import Counter from './components/Counter'

class App extends React.Component {
  sendAnalytics (action) {
    console.log(`Action [${action}] DONE: Analytics to sent`);
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Counter</h1>
          <hr/>
          <Counter step={ 1 }>
            { ({getCounterProps}) => {
                const counterProps = getCounterProps({ 
                  sendAnalyticsHandler: this.sendAnalytics,
                  countMultiplier: x => 2*x 
                });

                return (
                  <div>
                    <button onClick={ counterProps.decrementHandler }>DEC</button>
                    <span>{counterProps.count}</span>
                    <button onClick={ counterProps.incrementHandler }>INC</button>
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
