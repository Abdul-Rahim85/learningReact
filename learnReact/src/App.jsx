import React from "react"
import "./styles.css"

export default function App() {
  const [count, setCount] = React.useState(0);

  function add() {
    setCount(prevCount => prevCount + 1);
  }

  function subtract() {
    setCount(prevCount => prevCount - 1);
  }

return (
  <main className="container">
    <h1>How many times will Bob say "state" in this section?</h1>
    <div className="counter">
      <button className="minus" aria-label="Decrease count" onClick={subtract}>
        –
      </button>
      <h2 className="count">{count}</h2>
      <button className="plus" aria-label="Increase count" onClick={add}>
        +
      </button>
    </div>
  </main>
)
}
