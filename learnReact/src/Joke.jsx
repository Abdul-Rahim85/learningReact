export default function Joke(props) {
  return(
    <article>
      {props.setup && <p className="setup">Setup: {props.setup}</p>}
      <p>{props.punchline}</p>
      <hr />
    </article>
  )
}
