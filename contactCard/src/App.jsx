import React from "react"
import Star from "./Star"
import avatar from "./images/user.png"

export default function App() {
  const [contact, setContact] = React.useState({
    firstName: "Abdulrahim",
    lastName: "Muhammad",
    phone: "+249 (012) 285-8804",
    email: "abdelrheem@gmail.com",
    isFavorite: false
  })
  

  function toggleFavorite() {
    setContact(prevContact => ({
      ...prevContact,
      isFavorite: !prevContact.isFavorite
    }))
  }

  return (
    <main>
      <article className="card">
        <img
          src={avatar}
          className="avatar"
          alt="User profile picture of Abdulrahim Muhammad"
        />
        <div className="info">
          <Star isFilled={contact.isFavorite} handleToggle={toggleFavorite}/>
          <h2 className="name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="contact">{contact.phone}</p>
          <p className="contact">{contact.email}</p>
        </div>
      </article>
    </main>
  )
}
