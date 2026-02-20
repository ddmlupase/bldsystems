import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import AboutUs from './pages/AboutUs';
import Projects from './pages/Projects';
import Links from './pages/Links';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <div className="nav-content">
          <div className="nav-brand">BLD Systems</div>
          <div className="nav-links">
            <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About Us</NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Projects</NavLink>
            <NavLink to="/links" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Links</NavLink>
          </div>
        </div>
      </nav>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/links" element={<Links />} />
        </Routes>
      </main>
      <footer className="footer">
        <p>© 2026 BLD Systems. All rights reserved.</p>
      </footer>
    </Router>
  );
}

export default App;


