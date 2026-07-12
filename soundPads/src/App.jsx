import React from "react"
import Pad from "./Pad"
import pads from "./pads"

export default function App() {
  const [padsBut, setPadsBut] = React.useState(pads);

  function togglePad(id) {
    setPadsBut(prevPads => {
      return prevPads.map(pad => {
        return pad.id === id ? {...pad, on: !pad.on} : pad
      })
    }
    )
  }

  const padElements = padsBut.map(pad => (
  <Pad key={pad.id} id={pad.id} color={pad.color} on={pad.on} handleClick={togglePad} />
  ))

  return (
    <main>
      <div className="pad-container">
        {padElements}
      </div>
    </main>
  )
}
