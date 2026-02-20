import React from 'react';
import './Links.css';

function Links() {
  const drives = [
    { name: 'Capstone 1', url: 'https://drive.google.com/drive/folders/1Lh9C5C0UoN8n-i9M2tJIAuZZ_jurCFuk?usp=sharing' },
    { name: 'SIA 1', url: 'https://drive.google.com/drive/folders/1ZA14u8Ld3rt3fPvw6VhfDgsUjhoUmWZO?usp=sharing' },
    { name: 'SIA 2', url: 'https://drive.google.com/drive/folders/160n0wWWfLhtet7R-1nDy69EXb53D4arF?usp=sharing' },
  ];

  const repos = [
    { name: 'Capstone Repo', url: 'https://github.com' },
    { name: 'SIA Repo', url: 'https://github.com' },
  ];

  return (
    <div className="links-page">
      <section className="links-hero">
        <h1 className="links-title">Links</h1>
        <p className="links-subtitle">Quick access to our shared Google Drives and GitHub repositories.</p>
      </section>

      <h2 className="links-section-title">Google Drives</h2>
      <section className="drives-container">
        {drives.map((drive, index) => (
          <a
            key={index}
            href={drive.url}
            target="_blank"
            rel="noopener noreferrer"
            className="drive-link"
          >
            <div className="drive-icon">
              <svg viewBox="0 0 87.3 78" xmlns="http://www.w3.org/2000/svg" className="gdrive-svg">
                <path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8H0c0 1.55.4 3.1 1.2 4.5z" fill="#0066DA"/>
                <path d="M43.65 25L29.9 1.2c-1.35.8-2.5 1.9-3.3 3.3L1.2 52.35c-.8 1.4-1.2 2.95-1.2 4.5h27.5z" fill="#00AC47"/>
                <path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75L86.1 57.3c.8-1.4 1.2-2.95 1.2-4.5H59.8L73.55 76.8z" fill="#EA4335"/>
                <path d="M43.65 25L57.4 1.2C56.05.4 54.5 0 52.9 0H34.4c-1.6 0-3.15.45-4.5 1.2z" fill="#00832D"/>
                <path d="M59.8 52.8H27.5l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.3c1.6 0 3.15-.45 4.5-1.2z" fill="#2684FC"/>
                <path d="M73.4 26.5l-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3L43.65 25l16.15 27.8h27.5c0-1.55-.4-3.1-1.2-4.5z" fill="#FFBA00"/>
              </svg>
            </div>
            <span className="drive-name">{drive.name}</span>
            <span className="drive-label">Google Drive</span>
          </a>
        ))}
      </section>

      <h2 className="links-section-title">GitHub Repositories</h2>
      <section className="drives-container">
        {repos.map((repo, index) => (
          <a
            key={index}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="drive-link"
          >
            <div className="drive-icon">
              <svg viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg" className="gdrive-svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6C29.304 70.198 17.9 65.89 17.9 46.938c0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#1d1d1f"/>
              </svg>
            </div>
            <span className="drive-name">{repo.name}</span>
            <span className="drive-label">GitHub</span>
          </a>
        ))}
      </section>
    </div>
  );
}

export default Links;
