import { Link } from 'react-router-dom'
import DomainCard from '../components/DomainCard.jsx'
import EventPreview from '../components/EventPreview.jsx'
import StatCard from '../components/StatCard.jsx'
import events from '../data/events.json'
import './Home.css'

const stats = [
  { value: '120+', label: 'Active members' },
  { value: '35+', label: 'Workshops hosted' },
  { value: '18', label: 'Student projects' },
  { value: '6', label: 'Tech domains' },
]

const domains = [
  {
    code: 'AI',
    title: 'AI & Machine Learning',
    text: 'Model building, prompt engineering, data workflows, and applied research sessions.',
  },
  {
    code: 'WD',
    title: 'Web Development',
    text: 'Frontend systems, backend APIs, databases, deployment, and product thinking.',
  },
  {
    code: 'CS',
    title: 'Cybersecurity',
    text: 'CTFs, secure coding, network basics, threat modeling, and ethical hacking practice.',
  },
  {
    code: 'RB',
    title: 'Robotics & IoT',
    text: 'Microcontrollers, sensors, automation prototypes, and hands-on hardware builds.',
  },
]

const eventPreviews = events.slice(0, 2).map((event) => ({
  date: event.eventDates.split(',')[0],
  eventId: event.id,
  title: event.eventName,
  meta: `${event.eventType} • ${event.venue}`,
}))

const memberPreviewRoles = ['Club Head', 'Vice Club Head', 'Technical Team Head']

function Home({ logo }) {
  return (
    <>
      <section className="hero-section" id="home">
        <div className="hero-grid" aria-hidden="true"></div>
        <div className="hero-orbit hero-orbit-one" aria-hidden="true"></div>
        <div className="hero-orbit hero-orbit-two" aria-hidden="true"></div>

        <div className="hero-content">
          <p className="eyebrow">College Technical Club</p>
          <h1>Build, break, learn, and launch with OsCode Club.</h1>
          <p className="hero-copy">
            A student-led community for developers, builders, designers, and curious problem solvers
            shaping real projects through workshops, events, and hands-on collaboration.
          </p>

          <div className="hero-actions" aria-label="Primary actions">
            <Link className="primary-action" to="/events">
              Explore Events
            </Link>
            <a className="secondary-action" href="#domains">
              View Domains
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="OsCode Club visual identity">
          <div className="logo-core">
            <img src={logo} alt="OsCode Club logo" />
          </div>
          <div className="terminal-panel">
            <div className="terminal-dots" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <pre>
              <code>{`club.init()
  .learn("code")
  .ship("projects")
  .register("events")`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="stats-strip" aria-label="Club numbers">
        {stats.map((item) => (
          <StatCard key={item.label} value={item.value} label={item.label} />
        ))}
      </section>

      <section className="section-block" id="domains">
        <div className="section-heading">
          <p className="eyebrow">Focus Areas</p>
          <h2>Spaces for every kind of technical curiosity.</h2>
        </div>
        <div className="domain-grid">
          {domains.map((domain) => (
            <DomainCard key={domain.title} {...domain} />
          ))}
        </div>
      </section>

      <section className="home-members-preview">
        <div>
          <p className="eyebrow">Members</p>
          <h2>Student leaders keeping the club moving.</h2>
          <p>
            Explore the core team and coordinators behind workshops, projects, community programs,
            and technical learning.
          </p>
        </div>
        <div className="home-members-card">
          {memberPreviewRoles.map((role, index) => (
            <span key={role}>
              <strong>Person {index + 1}</strong>
              {role}
            </span>
          ))}
          <Link className="events-preview-link" to="/members">
            View all members
          </Link>
        </div>
      </section>

      <section className="events-preview" id="events">
        <div>
          <p className="eyebrow">Upcoming</p>
          <h2>Workshops are already warming up.</h2>
          <p>
            Browse upcoming programs, open full details, and register through dynamic forms
            designed for individual and team-based events.
          </p>
          <Link className="events-preview-link" to="/events">
            Open events page
          </Link>
        </div>
        <div className="event-preview-list">
          {eventPreviews.map((event) => (
            <EventPreview key={event.title} {...event} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Home
