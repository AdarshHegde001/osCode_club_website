import { Link } from 'react-router-dom'
import './EventCard.css'

function EventPoster({ eventName, eventType, eventPosterUrl }) {
  if (eventPosterUrl) {
    return <img src={eventPosterUrl} alt={`${eventName} poster`} />
  }

  return (
    <div className="event-poster-placeholder" aria-hidden="true">
      <span>{eventType}</span>
      <strong>{eventName}</strong>
      <small>OSCode Club</small>
    </div>
  )
}

function EventCard({ event }) {
  return (
    <article className="event-card">
      <div className="event-card-poster">
        <EventPoster
          eventName={event.eventName}
          eventPosterUrl={event.eventPosterUrl}
          eventType={event.eventType}
        />
      </div>

      <div className="event-card-content">
        <div className="event-card-topline">
          <span>{event.eventType}</span>
          <span>{event.registrationFees}</span>
        </div>
        <h3>{event.eventName}</h3>
        <p>{event.eventDetails}</p>

        <dl className="event-meta-grid">
          <div>
            <dt>Date</dt>
            <dd>{event.eventDates}</dd>
          </div>
          <div>
            <dt>Venue</dt>
            <dd>{event.venue}</dd>
          </div>
          <div>
            <dt>Team Size</dt>
            <dd>{event.teamSize > 1 ? `Up to ${event.teamSize}` : 'Individual'}</dd>
          </div>
        </dl>

        <Link className="event-card-link" to={`/events/${event.id}`}>
          View details and register
        </Link>
      </div>
    </article>
  )
}

export default EventCard
