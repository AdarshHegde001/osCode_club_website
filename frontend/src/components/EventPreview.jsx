import { Link } from 'react-router-dom'
import './EventPreview.css'

function EventPreview({ date, eventId, meta, title }) {
  return (
    <Link className="event-preview-card" to={`/events/${eventId}`}>
      <span>{date}</span>
      <div>
        <h3>{title}</h3>
        <p>{meta}</p>
      </div>
    </Link>
  )
}

export default EventPreview
