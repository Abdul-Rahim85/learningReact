import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

function Navbar() {
  return (
    <nav>
      <h1>My Website</h1>
      <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

function MainContent() {
  return (
    <div>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>It's a popular library, so I'll be able to fit in with the cool kids!</li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <MainContent />
  </StrictMode>,
)
