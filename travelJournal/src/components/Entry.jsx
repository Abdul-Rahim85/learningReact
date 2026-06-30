export default function Entry(props) {
  return (
    <article>
      <section className="entry-image-container">
        <img src={props.img.src} className="entry-image" alt={props.img.alt} />
      </section>
      <section>
        <div className="title">
          <span>
            <img src="/public/images/marker.png" alt="Marker Logo" />
            {props.country}
          </span>
          <small><a href={props.googleMapsLink}>View on Google Maps</a></small>
        </div>
        <h1>{props.title}</h1>
        
        <small className="date">{props.dates}</small>
        <p>{props.text}</p>
      </section>
    </article>
  )
}