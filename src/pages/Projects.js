import React, { useState } from 'react';
import './Projects.css';
import oktv1 from '../assets/OKTv/oktv1.png';
import oktv2 from '../assets/OKTv/oktv2.png';

function Projects() {
  const screenshots = [oktv1, oktv2];
  const [currentImg, setCurrentImg] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const prevImg = () => {
    setCurrentImg((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const nextImg = () => {
    setCurrentImg((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="projects-page">
      <section className="projects-hero">
        <h1 className="projects-title">Projects</h1>
        <p className="projects-subtitle">What we built together.</p>
      </section>

      <section className="project-showcase">
        <div className="showcase-header">
          <span className="showcase-tag">Technopreneurship Course</span>
          <h2 className="showcase-name">OKTv</h2>
          <p className="showcase-tagline">Karaoke, reimagined.</p>
        </div>

        <p className="showcase-description">
          OKTv is a karaoke platform designed for everyone — sing for fun, discover new tracks,
          or share your performances with the world. Think Spotify meets YouTube, but built
          entirely around karaoke. Users can browse and play karaoke videos, save them offline
          for anytime access, and create and upload their own karaoke content. Whether you're
          performing solo or publishing for an audience, OKTv makes it effortless.
        </p>

        <div className="showcase-screenshots">
          <button className="carousel-arrow left" onClick={prevImg} aria-label="Previous">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
          <div className="carousel-image-wrapper" onClick={() => setLightboxOpen(true)}>
            <img src={screenshots[currentImg]} alt={`OKTv Screenshot ${currentImg + 1}`} className="showcase-img" />
          </div>
          <button className="carousel-arrow right" onClick={nextImg} aria-label="Next">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
          <div className="carousel-dots">
            {screenshots.map((_, i) => (
              <span key={i} className={`carousel-dot ${i === currentImg ? 'active' : ''}`} onClick={() => setCurrentImg(i)} />
            ))}
          </div>
        </div>

        <div className="showcase-links">
          <a href="https://oktv-karaoke.vercel.app/" target="_blank" rel="noopener noreferrer" className="showcase-link primary">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Visit Website
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="showcase-link secondary">
            <svg viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
              <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6C29.304 70.198 17.9 65.89 17.9 46.938c0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="currentColor"/>
            </svg>
            View Repository
          </a>
        </div>
      </section>

      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={() => setLightboxOpen(false)}>
          <button className="lightbox-close" onClick={() => setLightboxOpen(false)} aria-label="Close">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
          <img src={screenshots[currentImg]} alt={`OKTv Screenshot ${currentImg + 1}`} className="lightbox-img" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
}

export default Projects;
