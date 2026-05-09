import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar({ logo }) {
  const links = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Members', to: '/members' },
    { label: 'Events', to: '/events' },
  ]

  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="OsCode Club home">
        <img src={logo} alt="" />
        <span>OsCode Club</span>
      </Link>

      <nav className="nav-links" aria-label="Main navigation">
        {links.map(({ label, to }) => (
          <NavLink key={label} to={to}>
            {label}
          </NavLink>
        ))}
      </nav>

      <NavLink className="nav-cta" to="/events">
        Join Event
      </NavLink>
    </header>
  )
}

export default Navbar
