import { Link } from 'react-router-dom'
import './About.css'

const impactStats = [
  { value: '#StartupIndia', label: 'Recognized community' },
  { value: '70+', label: 'Institutions connected' },
  { value: 'Multi-college', label: 'Student tech network' },
]

const activityTypes = ['Workshops', 'Hackathons', 'Seminars', 'Ideathons', 'Tech Talks']

const domains = ['AI/ML', 'Cybersecurity', 'Web & App Development', 'IoT', 'AR/VR']

const appFeatures = [
  'Job and internship opportunities',
  'Interview experiences',
  'Curated learning resources',
  'Wide range of tech events',
  'Networking and mentorship through UrBuddy',
]

function About() {
  return (
    <section className="about-page" id="about">
      <div className="about-intro">
        <div>
          <p className="eyebrow">About OSCode</p>
          <h2>Igniting innovation and empowering students through practical tech learning.</h2>
        </div>
        <p>
          OSCode is a #StartupIndia-recognized multi-college tech community dedicated to
          upskilling students through hands-on learning, industry-focused programs, mentorship,
          collaboration, and innovation.
        </p>
      </div>

      <div className="about-impact-grid" aria-label="OSCode impact highlights">
        {impactStats.map((stat) => (
          <article className="about-impact-card" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </div>

      <div className="about-story-grid">
        <article className="about-panel about-mission">
          <span className="panel-index">01</span>
          <h3>Bridging campus and industry</h3>
          <p>
            With a presence across 70+ institutions, OSCode helps students move beyond theory
            by connecting classroom learning with practical exposure, peer collaboration, and
            guided project-building.
          </p>
        </article>

        <article className="about-panel about-programs">
          <span className="panel-index">02</span>
          <h3>Programs that feel hands-on</h3>
          <p>
            We conduct domain-focused sessions that help students explore emerging technologies,
            build confidence, and meet people who are working on similar goals.
          </p>
          <div className="tag-cloud" aria-label="Program formats">
            {activityTypes.map((activity) => (
              <span key={activity}>{activity}</span>
            ))}
          </div>
        </article>
      </div>

      <div className="about-domains">
        <div>
          <p className="eyebrow">Emerging Fields</p>
          <h3>Learning tracks built around modern technology.</h3>
        </div>
        <div className="about-domain-list">
          {domains.map((domain) => (
            <span key={domain}>{domain}</span>
          ))}
        </div>
      </div>

      <div className="about-app-card">
        <div className="app-card-copy">
          <p className="eyebrow">OSCode App</p>
          <h3>A one-stop platform for tech students.</h3>
          <p>
            The OSCode App keeps students updated with opportunities, resources, events, and
            mentor access so they can keep growing in one connected ecosystem.
          </p>
        </div>

        <div className="app-feature-grid">
          {appFeatures.map((feature) => (
            <span key={feature}>{feature}</span>
          ))}
        </div>
      </div>

      <div className="about-cta">
        <h3>Whether you are a student ready to grow or a professional keen to mentor, OSCode is a launchpad to thrive in tech.</h3>
        <Link to="/events">Explore upcoming programs</Link>
      </div>
    </section>
  )
}

export default About
