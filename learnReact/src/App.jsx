import Contact from "./Contacts"
import Joke from "./Joke"
import jokesData from "./jokes"

function App() {
  const jokeElements = jokesData.map(joke => {
    return <Joke
      setup={joke.setup}
      punchline={joke.punchline}
    />
  })
return (
  <div className="contacts">
    {jokeElements}
  </div>
)
}

export default App

/*

  

*/ 