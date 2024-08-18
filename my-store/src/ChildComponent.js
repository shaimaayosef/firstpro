import React from 'react'

const ChildComponent = ({ message, count }) => {
  return (
    <div>
        <h2>{message}</h2>
        <p>Count: {count}</p>
    </div>
  )
}

export default ChildComponent