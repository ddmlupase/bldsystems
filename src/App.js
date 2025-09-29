import { useState } from 'react';
import { Home, FileText, Menu, X } from 'lucide-react';
import './App.css';
import bernard from './assets/images/bernard.jpg';
import daniel from './assets/images/daniel.jpg';
import loejee from './assets/images/loejee.jpg';


export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navigation = [
    { name: 'Homepage', id: 'home', icon: Home },
    { name: 'Files', id: 'files', icon: FileText }
  ];

  return (
    <div className="app-container">
      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <div className="sidebar-content">
          <h1 className="sidebar-title">Dashboard</h1>
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
      name: 'Loejee', 
      role: 'Full Stack Developer', 
      description: 'Passionate about building scalable applications',
      image: loejee
    },
    { 
      id: 2, 
      name: 'Bernard Louie Pacanza', 
      role: 'Frontend Developer', 
      description: 'Expert in creating beautiful user interfaces',
      image: bernard
    },
    { 
      id: 3, 
      name: 'Daniel', 
      role: 'Backend Developer', 
      description: 'Specialized in database and API development',
      image: daniel
    },
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">Welcome to BLD Systems</h1>
      
      <div className="info-card" style={{ marginBottom: '2rem' }}>
        <h3 className="info-title">About Us</h3>
        <p className="info-text" style={{ marginBottom: '1rem' }}>
          We are <strong>BLD Systems</strong>, a group of motivated IT students dedicated to learning and creating innovative solutions. 
          Our mission is to build solid projects throughout our academic journey, showcasing our skills and passion for technology.
        </p>
        <p className="info-text">
          Through collaboration and continuous learning, we develop real-world applications that solve problems and demonstrate 
          our technical expertise. Each project reflects our commitment to excellence and our growth as future IT professionals.
        </p>
      </div>

      <h2 className="section-title" style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem', color: '#111827' }}>Our Team</h2>
      <div className="stats-grid">
        {members.map((member) => (
          <div key={member.id} className="stat-card member-card">
            <img 
              src={member.image} 
              alt={member.name}
              className="member-image"
            />
            <h3 className="stat-label">{member.name}</h3>
            <p className="stat-value" style={{ fontSize: '1rem', fontWeight: '600', color: '#2563eb', marginBottom: '0.5rem' }}>
              {member.role}
            </p>
            <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>{member.description}</p>
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
    { id: 3, label: 'Capstone 1 Files (SOON?!!!)', url: 'https://drive.google.com/drive/folders/your-folder-id-3' }
  ];

  const githubRepos = [
    { id: 1, name: 'OKTv', url: 'https://github.com/username/repo-1' },
    { id: 2, name: 'PrintSari Corner', url: 'https://github.com/username/repo-2' }
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">Files</h1>
      
      {/* Google Drive Section */}
      <div className="section-card">
        <h2 className="section-title">Google Drive - Group Files</h2>
        <div className="drive-grid">
          {googleDriveLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="drive-link"
            >
              <div className="drive-link-content">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg" 
                  alt="Google Drive"
                  className="drive-icon"
                />
                <span className="drive-label">{link.label}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* GitHub Section */}
      <div className="section-card">
        <h2 className="section-title">GitHub - Source Code</h2>
        <div className="github-list">
          {githubRepos.map((repo) => (
            <a
              key={repo.id}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              <img 
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
                alt="GitHub"
                className="github-icon"
              />
              <span className="github-label">{repo.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}