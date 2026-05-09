import MemberCard from '../components/MemberCard.jsx'
import members from '../data/members.json'
import './Members.css'

function Members() {
  const leadership = members.slice(0, 3)
  const teamMembers = members.slice(3)

  return (
    <section className="members-page">
      <div className="members-hero">
        <div>
          <p className="eyebrow">Club Members</p>
          <h1>Meet the student team powering OSCode Club.</h1>
        </div>
        <p>
          Our members coordinate technical learning, workshops, community programs, design,
          content, operations, and mentorship across the club ecosystem.
        </p>
      </div>

      <section className="leadership-section" aria-labelledby="leadership-title">
        <div className="members-section-heading">
          <span>Core Team</span>
          <h2 id="leadership-title">Leadership</h2>
        </div>
        <div className="leadership-grid">
          {leadership.map((member) => (
            <MemberCard key={member.memberName} {...member} />
          ))}
        </div>
      </section>

      <section className="team-section" aria-labelledby="team-title">
        <div className="members-section-heading">
          <span>Club Operations</span>
          <h2 id="team-title">Team Members</h2>
        </div>
        <div className="members-grid">
          {teamMembers.map((member) => (
            <MemberCard key={member.memberName} {...member} />
          ))}
        </div>
      </section>
    </section>
  )
}

export default Members
