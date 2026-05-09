import './MemberCard.css'

function MemberCard({ memberName, memberPosition, memberCollege, memberImageurl }) {
  const initials = memberName
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)

  return (
    <article className="member-card">
      <div className="member-photo">
        {memberImageurl ? (
          <img src={memberImageurl} alt={`${memberName} profile`} />
        ) : (
          <span aria-hidden="true">{initials}</span>
        )}
      </div>
      <div className="member-card-copy">
        <p>{memberPosition}</p>
        <h3>{memberName}</h3>
        <span>{memberCollege}</span>
      </div>
    </article>
  )
}

export default MemberCard
