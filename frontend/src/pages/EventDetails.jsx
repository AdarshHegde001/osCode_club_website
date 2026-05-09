import { useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import events from '../data/events.json'
import './EventDetails.css'

const emptyForm = {
  name: '',
  college: '',
  email: '',
  phone: '',
}

function EventDetails() {
  const { eventId } = useParams()
  const event = events.find((item) => item.id === eventId)
  const [formData, setFormData] = useState(emptyForm)
  const [teammates, setTeammates] = useState([])
  const [registered, setRegistered] = useState(false)

  const teammateSlots = useMemo(() => {
    if (!event || event.teamSize <= 1) return []
    return Array.from({ length: event.teamSize - 1 }, (_, index) => index)
  }, [event])

  if (!event) {
    return <Navigate to="/events" replace />
  }

  const isTeamEvent = event.teamSize > 1

  const updateField = (field, value) => {
    setRegistered(false)
    setFormData((current) => ({ ...current, [field]: value }))
  }

  const updateTeammate = (index, field, value) => {
    setRegistered(false)
    setTeammates((current) => {
      const next = [...current]
      next[index] = { name: '', phone: '', ...next[index], [field]: value }
      return next
    })
  }

  const handleSubmit = (eventObject) => {
    eventObject.preventDefault()
    setRegistered(true)
  }

  return (
    <section className="event-details-page">
      <Link className="back-link" to="/events">
        Back to events
      </Link>

      <div className="event-details-hero">
        <div className="event-details-poster">
          {event.eventPosterUrl ? (
            <img src={event.eventPosterUrl} alt={`${event.eventName} poster`} />
          ) : (
            <div className="event-detail-poster-placeholder" aria-hidden="true">
              <span>{event.eventType}</span>
              <strong>{event.eventName}</strong>
              <small>{event.eventDates}</small>
            </div>
          )}
        </div>

        <div className="event-details-copy">
          <p className="eyebrow">{event.eventType}</p>
          <h1>{event.eventName}</h1>
          <p>{event.eventDetails}</p>

          <dl className="event-detail-meta">
            <div>
              <dt>Date</dt>
              <dd>{event.eventDates}</dd>
            </div>
            <div>
              <dt>Venue</dt>
              <dd>{event.venue}</dd>
            </div>
            <div>
              <dt>Fees</dt>
              <dd>{event.registrationFees}</dd>
            </div>
            <div>
              <dt>Team Size</dt>
              <dd>{isTeamEvent ? `Up to ${event.teamSize} members` : 'Individual'}</dd>
            </div>
          </dl>
        </div>
      </div>

      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="form-heading">
          <p className="eyebrow">Registration</p>
          <h2>{isTeamEvent ? 'Register your team' : 'Register for this event'}</h2>
          <p>All fields are mandatory. Backend storage will be connected in the next phase.</p>
        </div>

        <div className="form-grid">
          <label>
            Name
            <input
              required
              type="text"
              value={formData.name}
              onChange={(eventObject) => updateField('name', eventObject.target.value)}
              placeholder="Enter your full name"
            />
          </label>
          <label>
            College
            <input
              required
              type="text"
              value={formData.college}
              onChange={(eventObject) => updateField('college', eventObject.target.value)}
              placeholder="Enter your college name"
            />
          </label>
          <label>
            Email
            <input
              required
              type="email"
              value={formData.email}
              onChange={(eventObject) => updateField('email', eventObject.target.value)}
              placeholder="name@example.com"
            />
          </label>
          <label>
            Phone Number
            <input
              required
              type="tel"
              value={formData.phone}
              onChange={(eventObject) => updateField('phone', eventObject.target.value)}
              placeholder="Enter your phone number"
            />
          </label>
        </div>

        {isTeamEvent && (
          <div className="teammates-section">
            <h3>Teammate Details</h3>
            <p>Add details for the remaining {event.teamSize - 1} team member slots.</p>

            <div className="teammates-grid">
              {teammateSlots.map((slot) => (
                <fieldset className="teammate-card" key={slot}>
                  <legend>Teammate {slot + 1}</legend>
                  <label>
                    Name
                    <input
                      required
                      type="text"
                      value={teammates[slot]?.name ?? ''}
                      onChange={(eventObject) =>
                        updateTeammate(slot, 'name', eventObject.target.value)
                      }
                      placeholder="Teammate name"
                    />
                  </label>
                  <label>
                    Phone Number
                    <input
                      required
                      type="tel"
                      value={teammates[slot]?.phone ?? ''}
                      onChange={(eventObject) =>
                        updateTeammate(slot, 'phone', eventObject.target.value)
                      }
                      placeholder="Teammate phone"
                    />
                  </label>
                </fieldset>
              ))}
            </div>
          </div>
        )}

        <button className="register-button" type="submit">
          Register
        </button>

        {registered && (
          <p className="success-message" role="status">
            Registered successfully for {event.eventName}.
          </p>
        )}
      </form>
    </section>
  )
}

export default EventDetails
