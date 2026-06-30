import Entry from "./Entry";
import entryData from "../data"

export default function MainContent() {
  const entries = entryData.map(entry => {
    return <Entry
      key={entry.id}
      entry={entry}
    />
  })

  return (
    <main>
      {entries}
    </main>
  )
}
