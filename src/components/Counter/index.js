import React from 'react'

import logProps from '../../hoc/log-props';


function Counter({ count, decrementHandler, incrementHandler }) {
  return (
    <div>
      <button onClick={ decrementHandler }>DEC</button>
      <span>{ count }</span>
      <button onClick={ incrementHandler }>INC</button>
    </div>
  )
}

export default logProps(Counter)
