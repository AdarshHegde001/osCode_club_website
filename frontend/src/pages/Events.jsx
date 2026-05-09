import EventCard from '../components/EventCard.jsx'
import events from '../data/events.json'
import './Events.css'

function Events() {
  return (
    <section className="events-page">
      <div className="events-hero">
        <div>
          <p className="eyebrow">Events & Workshops</p>
          <h1>Register for upcoming technical programs.</h1>
        </div>
        <p>
          Choose from hackathons, workshops, webinars, and challenge nights designed to help
          students build practical skills, meet collaborators, and ship real work.
        </p>
      </div>

      <div className="events-filter-strip" aria-label="Event summary">
        <span>{events.length} upcoming programs</span>
        <span>{events.filter((event) => event.teamSize > 1).length} team events</span>
        <span>{events.filter((event) => event.registrationFees === 'Free').length} free events</span>
      </div>

      <div className="events-list">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  )
}

export default Events
