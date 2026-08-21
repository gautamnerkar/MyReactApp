import React, { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <h1>Real-time Button Press Counter</h1>
      <div className="counter">{count}</div>
      <button className="btn" onClick={() => setCount(c => c + 1)}>
        Press me
      </button>
      <p>Presses: {count}</p>
    </div>
  )
}
