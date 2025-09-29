import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, FileText, Menu, X, LogOut, Users, Sparkles } from 'lucide-react';
import { useAuth } from '../App';
import '../styles/dashboard.css';
import bernard from '../assets/images/bernard.jpg';
import daniel from '../assets/images/daniel.jpg';
import loejee from '../assets/images/loejee.jpg';

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navigation = [
    { name: 'Homepage', id: 'home', icon: Home },
    { name: 'Files', id: 'files', icon: FileText }
  ];

  return (
    <div className="app-container">
      {/* Animated Background */}
      <div className="dashboard-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <div className="sidebar-content">
          <div className="sidebar-header">
            <div className="logo-container">
              <div className="logo-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
            </div>
            <h1 className="sidebar-title">BLD Systems</h1>
          </div>

          <nav className="nav">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`nav-button ${currentPage === item.id ? 'nav-button-active' : ''}`}
                >
                  <Icon size={20} />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </nav>

          <div className="sidebar-footer">
            <button
              onClick={handleLogout}
              className="logout-button"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-container">
        {/* Header */}
        <header className="header">
          <div className="header-content">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="toggle-button"
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <h2 className="header-title">
              {navigation.find(item => item.id === currentPage)?.name}
            </h2>
            <div className="header-spacer"></div>
          </div>
        </header>

        {/* Page Content */}
        <main className="main-content">
          {currentPage === 'home' && <HomePage />}
          {currentPage === 'files' && <FilesPage />}
        </main>
      </div>
    </div>
  );
}

function HomePage() {
  const members = [
    { 
      id: 1, 
      name: 'Loejee Miguel Dulaugon', 
      role: 'Full Stack Developer', 
      description: 'Passionate about building scalable applications',
      image: loejee,
      socials: {
        facebook: 'https://www.facebook.com/loejeemiguellawas.dulaugon',
        linkedin: 'https://www.linkedin.com/in/loejee-miguel-dulaugon-805480284/',
        github: 'https://github.com/GuyWithBag',
        instagram: 'https://www.instagram.com/loeloeloeman/'
      }
    },
    { 
      id: 2, 
      name: 'Bernard Louie Pacanza', 
      role: 'Full Stack Developer', 
      description: 'Full-stack developer with a passion for creating impactful solutions',
      image: bernard,
      socials: {
        facebook: 'https://www.facebook.com/pacanza.bernard',
        linkedin: 'https://www.linkedin.com/in/bernardpacanza4884/',
        github: 'https://github.com/hyakumachi',
        instagram: 'https://www.instagram.com/bernardokoji_/?fbclid=IwY2xjawNHut1leHRuA2FlbQIxMABicmlkETEzSzBQTmQ1WHdFS3FTTTFHAR5rFVUuesmTLcMYmPgkaNlkdLnbykY6meqJ3GjqVWgpMFHi61YEHzIKdfi0lA_aem_zXjXJrIOffyEd40v2JKqJw#'
      }
    },
    { 
      id: 3, 
      name: 'Daniel David Lupase', 
      role: 'Tambay', 
      description: 'I don\'t know, I just got here',
      image: daniel,
      socials: {
        facebook: 'https://www.facebook.com/danieldavidlupase',
        linkedin: 'https://www.linkedin.com/in/danieldavidlupase/',
        github: 'https://github.com/ddmlupase',
        instagram: 'https://instagram.com/daniel'
      }
    },
  ];

  return (
    <div className="page-container">
      <div className="welcome-header">
        <Sparkles className="welcome-icon" size={32} />
        <h1 className="page-title">Welcome to BLD Systems</h1>
      </div>
      
      <div className="info-card">
        <div className="info-header">
          <h3 className="info-title">About Us</h3>
        </div>
        <p className="info-text">
          We are <strong>BLD Systems</strong>, a group of motivated IT students dedicated to learning and creating innovative solutions. 
          Our mission is to build solid projects throughout our academic journey, showcasing our skills and passion for technology.
        </p>
        <p className="info-text">
          Through collaboration and continuous learning, we develop real-world applications that solve problems and demonstrate 
          our technical expertise. Each project reflects our commitment to excellence and our growth as future IT professionals.
        </p>
      </div>

      <div className="section-header">
        <Users size={24} />
        <h2 className="section-title">Our Team</h2>
      </div>
      <div className="stats-grid">
        {members.map((member) => (
          <div key={member.id} className="member-card">
            <div className="member-image-wrapper">
              <img 
                src={member.image} 
                alt={member.name}
                className="member-image"
              />
              <div className="member-overlay"></div>
            </div>
            <div className="member-content">
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-description">{member.description}</p>
              
              <div className="social-links">
                <a 
                  href={member.socials.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link facebook"
                  aria-label="Facebook"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                
                <a 
                  href={member.socials.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link linkedin"
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                
                <a 
                  href={member.socials.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link github"
                  aria-label="GitHub"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                
                <a 
                  href={member.socials.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link instagram"
                  aria-label="Instagram"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FilesPage() {
  const googleDriveLinks = [
    { id: 1, label: 'SIA Files', url: 'https://drive.google.com/drive/folders/1ZA14u8Ld3rt3fPvw6VhfDgsUjhoUmWZO?usp=drive_link' },
    { id: 2, label: 'Technopreneurship Files', url: 'https://drive.google.com/drive/folders/18iRs9_YqHW9vu1F4Qz2jUOnQuRHkHw4S?usp=drive_link' },
    { id: 3, label: 'Capstone 1 Files', url: '#' }
  ];

  const githubRepos = [
    { id: 1, name: 'OKTv', url: 'https://github.com/username/oktv' },
    { id: 2, name: 'PrintSari Corner', url: 'https://github.com/username/printsari' }
  ];

  const canvaLinks = [
    { id: 1, name: 'OKTv BMC', url: 'https://www.canva.com/design/DAGxt8f2a44/rZRuVk8yrTewanPXlxvu6w/edit' }
  ];


  return (
    <div className="page-container">
      <h1 className="page-title">Project Files & Resources</h1>
      
      <div className="section-card">
        <div className="section-card-header">
          <svg className="section-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
          </svg>
          <h2 className="section-card-title">Google Drive - Group Files</h2>
        </div>
        <div className="drive-grid">
          {googleDriveLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="drive-link"
            >
              <div className="drive-link-icon">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg" 
                  alt="Google Drive"
                />
              </div>
              <span className="drive-label">{link.label}</span>
              <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="7" y1="17" x2="17" y2="7"/>
                <polyline points="7 7 17 7 17 17"/>
              </svg>
            </a>
          ))}
        </div>
      </div>

      <div className="section-card">
        <div className="section-card-header">
          <svg className="section-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.91 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.59-2.805 5.61-5.475 5.91.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          <h2 className="section-card-title">GitHub - Source Code</h2>
        </div>
        <div className="github-list">
          {githubRepos.map((repo) => (
            <a
              key={repo.id}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              <div className="github-link-icon">
                <img 
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
                  alt="GitHub"
                />
              </div>
              <span className="github-label">{repo.name}</span>
              <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          ))}
        </div>
      </div>
      <div className="section-card">
        <div className="section-card-header">
          <svg className="section-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.457 15.519h2.914v2.914h-2.914v-2.914zm0-9.746h2.914v8.312h-2.914V5.773z"/>
          </svg>
          <h2 className="section-card-title">Canva - Design Files</h2>
        </div>
        <div className="canva-list">
          {canvaLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="canva-link"
            >
              <div className="canva-link-icon">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg" 
                  alt="Canva"
                />
              </div>
              <span className="canva-label">{link.name}</span>
              <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
