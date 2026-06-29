export default function Entry() {
  return (
    <article>
      <section className="entry-image-container">
        <img src="https://scrimba.com/links/travel-journal-japan-image-url" className="entry-image" alt="Mount Fuji" />
      </section>
      <section>
        <div className="title">
          <span>
            <img src="/public/images/marker.png" alt="Marker Logo" />
            JAPAN
          </span>
          <small><a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">View on Google Maps</a></small>
        </div>
        <h1>Mount Fuji</h1>
        
        <small className="date">12 Jan, 2021 - 24 Jan, 2021</small>
        <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
      </section>
    </article>
  )
}