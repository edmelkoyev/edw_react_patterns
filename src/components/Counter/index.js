import React from 'react'

function Counter({ count, decrementHandler, incrementHandler }) {
  return (
    <div>
      <button onClick={ decrementHandler }>DEC</button>
      <span>{ count }</span>
      <button onClick={ incrementHandler }>INC</button>
    </div>
  )
}

export default Counter
