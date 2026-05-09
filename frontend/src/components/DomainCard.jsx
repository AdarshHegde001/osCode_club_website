import './DomainCard.css'

function DomainCard({ code, title, text }) {
  return (
    <article className="domain-card">
      <span className="domain-code">{code}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  )
}

export default DomainCard
