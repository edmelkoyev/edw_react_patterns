import React from 'react'

function Counter( {count, decrementHandler, incrementHandler, incrementHandler2} ) {
  return (
    <div>
      <button onClick={ decrementHandler }>DEC</button>
      <span>{ count }</span>
      <button onClick={ incrementHandler }>INC</button>
      <button onClick={ incrementHandler2 }>2xINC</button>
    </div>
  )
}

export default Counter
