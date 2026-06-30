export default function Entry(props) {
  return (
    <article>
      <section className="entry-image-container">
        <img src={props.entry.img.src} className="entry-image" alt={props.entry.img.alt} />
      </section>
      <section>
        <div className="title">
          <span>
            <img src="/public/images/marker.png" alt="Marker Logo" />
            {props.entry.country}
          </span>
          <small><a href={props.entry.googleMapsLink}>View on Google Maps</a></small>
        </div>
        <h1>{props.entry.title}</h1>
        
        <small className="date">{props.entry.dates}</small>
        <p>{props.entry.text}</p>
      </section>
    </article>
  )
}