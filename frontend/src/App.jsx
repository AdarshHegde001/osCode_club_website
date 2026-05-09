import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import clubLogo from './assets/club-logo.png'
import Navbar from './components/Navbar.jsx'
import About from './pages/About.jsx'
import EventDetails from './pages/EventDetails.jsx'
import Events from './pages/Events.jsx'
import Home from './pages/Home.jsx'
import Members from './pages/Members.jsx'

function App() {
  return (
    <div className="site-shell">
      <Navbar logo={clubLogo} />
      <main>
        <Routes>
          <Route path="/" element={<Home logo={clubLogo} />} />
          <Route path="/about" element={<About />} />
          <Route path="/members" element={<Members />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:eventId" element={<EventDetails />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
