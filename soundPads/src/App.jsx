import React from "react"
import Pad from "./Pad"
import pads from "./pads"

export default function App() {
  const [padsBut, setPads] = React.useState(pads);
  const padElements = padsBut.map(pad => (
    <Pad key={pad.id} color={pad.color} on={pad.on} />
  ))

  return (
    <main>
      <div className="pad-container">
        {padElements}
      </div>
    </main>
  )
}
