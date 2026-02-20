import React, { useState, useEffect, useCallback } from 'react';
import './AboutUs.css';
import member1 from '../assets/member1.jpg';
import member2 from '../assets/member2.jpg';
import member3 from '../assets/member3.jpg';
import schoolImg from '../assets/school/school1.jpg';
import gallery1 from '../assets/gallery/gallery1.png';
import gallery2 from '../assets/gallery/gallery2.jpg';
import gallery3 from '../assets/gallery/gallery3.jpg';
import gallery4 from '../assets/gallery/gallery4.jpg';
import gallery5 from '../assets/gallery/gallery5.jpg';

function AboutUs() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [currentGallery, setCurrentGallery] = useState(0);

  const galleryImages = [
    { src: gallery1, alt: 'Team photo 1' },
    { src: gallery2, alt: 'Team photo 2' },
    { src: gallery3, alt: 'Team photo 3' },
    { src: gallery4, alt: 'Team photo 4' },
    { src: gallery5, alt: 'Team photo 5' },
  ];

  const nextGallerySlide = useCallback(() => {
    setCurrentGallery((prev) => (prev + 1) % galleryImages.length);
  }, [galleryImages.length]);

  useEffect(() => {
    const timer = setInterval(nextGallerySlide, 5000);
    return () => clearInterval(timer);
  }, [nextGallerySlide]);

  const techIcons = {
    JavaScript: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="#F7DF1E" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.405-.6-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179z"/>
      </svg>
    ),
    React: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="#61DAFB" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.31 0-.6.045-.876.143C3.16 2.312 1.78 5.556 2.674 9.9c-2.79.862-4.674 2.312-4.674 4.104 0 1.792 1.883 3.242 4.673 4.104C1.78 22.444 3.16 25.688 6.227 26.523c.277.098.567.143.876.143 1.346 0 3.107-.96 4.888-2.622 1.78 1.653 3.541 2.602 4.887 2.602.31 0 .6-.045.877-.143 3.068-.835 4.447-4.08 3.553-8.423 2.79-.862 4.673-2.312 4.673-4.104 0-1.792-1.882-3.242-4.673-4.104.894-4.344-.486-7.588-3.553-8.423a2.228 2.228 0 0 0-.877-.143zM7.1 4.995c.084-.03.172-.045.265-.045.927 0 2.234.692 3.635 1.975-1.3 1.402-2.527 3.07-3.6 4.946-1.815.247-3.476.67-4.884 1.24.365-3.456 2.158-7.08 4.584-8.116zm-2.15 10.776c.705.306 1.45.573 2.225.8a39.87 39.87 0 0 0 1.3 3.2c-1.457-.897-2.937-2.282-3.526-3.999zm4.604 1.408c-.597-.992-1.127-2.025-1.579-3.084.508-.07 1.033-.12 1.571-.145a31.65 31.65 0 0 0 2.464 3.866c-.844-.06-1.663-.19-2.456-.387zm6.893 0c-.793.197-1.612.328-2.456.387a31.67 31.67 0 0 0 2.464-3.866c.538.025 1.063.074 1.571.145-.452 1.059-.982 2.092-1.579 3.084v.25zm1.654-1.408c-.589 1.717-2.069 3.102-3.525 4a39.87 39.87 0 0 0 1.3-3.2c.774-.228 1.52-.495 2.225-.8zM12 15.9c-1.06 0-2.082-.154-3.044-.44a30.07 30.07 0 0 1-1.54-3.3 30.26 30.26 0 0 1 1.54-3.3A18.37 18.37 0 0 1 12 8.4c1.06 0 2.082.154 3.044.44.538 1.043 1.05 2.148 1.54 3.3a30.07 30.07 0 0 1-1.54 3.3A18.37 18.37 0 0 1 12 15.9z"/>
      </svg>
    ),
    'Node.js': (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="#339933" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339a.29.29 0 0 0 .272 0l8.795-5.076a.277.277 0 0 0 .134-.238V6.921a.28.28 0 0 0-.137-.242L12.137 1.6a.27.27 0 0 0-.27 0L3.077 6.68a.282.282 0 0 0-.14.243v10.15a.27.27 0 0 0 .139.235l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675A1.857 1.857 0 0 1 1.36 17.07V6.921c0-.645.344-1.248.92-1.573L11.074.272a1.938 1.938 0 0 1 1.85 0l8.794 5.076c.574.326.92.928.92 1.573v10.15a1.86 1.86 0 0 1-.92 1.604l-8.795 5.078a1.836 1.836 0 0 1-.925.247z"/>
      </svg>
    ),
    Python: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="#3776AB" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
      </svg>
    ),
    MongoDB: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="#47A248" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218z"/>
      </svg>
    ),
    TypeScript: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="#3178C6" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
      </svg>
    ),
    PostgreSQL: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="#4169E1" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.399.2894-2.2637.0553-2.5765-.2989.7295-1.3688 1.3163-2.8584 1.7489-4.4438.395-1.4474.6555-2.8817.7758-4.2661.0856-.9866.0358-1.8448-.1487-2.5554-.1878-.7233-.482-1.2812-.8937-1.6484-.6632-.5914-1.5724-.8818-2.6843-.8818-.7387 0-1.5698.1474-2.4758.4363a7.7675 7.7675 0 0 0-1.279-.1022c-.7957 0-1.5361.183-2.2146.546a8.0755 8.0755 0 0 0-.7211-.1516 5.6 5.6 0 0 0-.9806-.0856c-1.768 0-3.2806.6563-4.4969 1.9467C5.1883 4.5037 4.399 6.576 4.0928 9.1752c-.1525 1.2952-.169 2.5734-.0527 3.7984.1675 1.7647.5765 3.1498 1.2136 4.1206.7316 1.1146 1.6647 1.6773 2.7782 1.6773.4427 0 .9232-.1034 1.4294-.3077.4061-.164.7485-.3559 1.0215-.5738a13.5402 13.5402 0 0 0 1.3871.0905c.5006 0 .9804-.0449 1.4302-.1345l.0191-.004c.3512.3014.8578.603 1.5208.8958.8551.3775 1.4965.5208 2.0349.5208.1084 0 .2139-.0066.3166-.0197 1.0244-.1308 1.7506-.5587 2.1588-1.2712.2361-.4117.3487-.8692.3844-1.2895l.1218-1.3858c.0285-.3243.0497-.5937.0605-.8085l.0034-.0593c.2309.1498.4924.2687.7774.3529.3682.1093.7672.1643 1.1865.1643.5294 0 1.0167-.0932 1.4489-.277.4375-.1862.7575-.4327.9529-.7321.1554-.2389.211-.4724.1617-.6706z"/>
      </svg>
    ),
    Java: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="#ED8B00" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.851 18.56s-.917.534.653.714c.575.085 1.239.134 1.913.134 1.084 0 2.138-.125 3.149-.363l-.093.018c.374.228.809.442 1.271.615l.049.016c-4.523 1.937-10.234-.118-6.942-1.134zm-.584-2.594s-1.028.762.542.924c.687.086 1.482.106 2.373.106 1.34 0 2.665-.16 3.928-.466l-.1.021a3.075 3.075 0 0 0 1.006.604l.025.009c-5.456 1.595-11.531.126-7.774-1.198z"/>
        <path d="M13.292 10.09c1.174 1.351-.309 2.567-.309 2.567s2.979-1.537 1.611-3.462c-1.279-1.795-2.26-2.691 3.05-5.767 0 0-8.333 2.081-4.352 6.662zM19.04 20.321s.679.559-.747.991c-2.712.822-11.287 1.069-13.669.033-.856-.373.75-.89 1.254-.998.232-.059.365-.098.365-.098-.42-.295-2.715.58-1.166 .831 4.235 1.793 15.584-.805 13.963-1.759z"/>
        <path d="M9.292 13.125s-1.928 .458-.683.624c.527.07 1.577.11 2.559.037a14.103 14.103 0 0 0 2.661-.415l-.082.017s-.425.182-.732.274C10.56 14.363 5.76 13.883 7.39 13.1c1.375-.66 1.902.025 1.902.025z"/>
        <path d="M16.584 17.2c2.597-1.351 1.397-2.649.558-2.474-.113.024-.164.045-.164.045s.042-.066.122-.094c.915-.321 3.231 .949-.535 2.9 0 0 .039-.036.019-.377zm.458-10.321c0 0 2.755 2.762-2.613 7.016 0 0-.419.48.095 1.545-1.607-.735-2.782-1.382-1.993-1.985 1.157-.884 4.783-1.831 4.511-6.576z"/>
        <path d="M9.751 23.852c2.492.159 6.322-.088 6.413-1.265 0 0-.174.446-2.06.801-2.122.399-4.753.353-6.31.097 0 0 .319.264 1.957.367z"/>
      </svg>
    ),
    Firebase: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="#FFCA28" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.89 15.672L6.255.461A.542.542 0 0 1 7.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 0 0-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 0 0 1.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 0 0-.96 0L3.53 17.984z"/>
      </svg>
    ),
    CSS: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="#1572B6" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.002l5.355-1.12.942-9.164-12.15-.002-.242-2.628z"/>
      </svg>
    ),
  };

  const members = [
    {
      name: 'Daniel David',
      role: 'Walay Pulos',
      description: 'Pabigat ra ang boang',
      image: member1,
      location: 'Cebu, Philippines',
      techStack: ['JavaScript', 'React', 'Node.js', 'Python', 'MongoDB'],
      github: 'https://github.com/ddmlupase',
      linkedin: 'https://www.linkedin.com/in/danieldavidlupase/',
      facebook: 'https://www.facebook.com/danieldavidlupase/',
    },
    {
      name: 'Loejee Miguel',
      role: 'Full Stack Developer',
      description: 'Passionate about building elegant solutions and crafting clean code.',
      image: member2,
      location: 'Cebu, Philippines',
      techStack: ['JavaScript', 'React', 'Node.js', 'TypeScript', 'PostgreSQL'],
      github: 'https://github.com/GuyWithBag',
      linkedin: 'https://www.linkedin.com/in/loejee-miguel-dulaugon-805480284/',
      facebook: 'https://www.facebook.com/loejeemiguellawas.dulaugon',
    },
    {
      name: 'Bernard Louie',
      role: 'Full Stack Developer',
      description: 'Driven by curiosity and a love for solving complex problems.',
      image: member3,
      location: 'Cebu, Philippines',
      techStack: ['JavaScript', 'React', 'Java', 'Firebase', 'CSS'],
      github: 'https://github.com/hyakumachi',
      linkedin: 'https://www.linkedin.com/in/bernardpacanza4884/',
      facebook: 'https://www.facebook.com/pacanza.bernard',
    },
  ];

  return (
    <div className="about-page">
      <section className="hero-section">
        <h1 className="hero-title">BLD Systems</h1>
        <p className="hero-subtitle">
          We are college classmates from 1st year to 4th year — a team built on years of
          friendship, collaboration, and shared ambition. This is a showcase of what we've
          accomplished together over the past four years.
        </p>
      </section>

      <section className="team-section">
        <h2 className="section-title">Meet the Team</h2>
        <div className="cards-container">
          {members.map((member, index) => (
            <div className="member-card" key={index} onClick={() => setSelectedMember(member)}>
              <img src={member.image} alt={member.name} className="member-avatar" />
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-desc">{member.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="education-section">
        <div className="education-card">
          <div className="education-image-wrapper">
            <img src={schoolImg} alt="Ateneo de Davao University" className="education-image" />
          </div>
          <div className="education-details">
            <p className="education-label">Where We Study</p>
            <h3 className="education-school">Ateneo de Davao University</h3>
            <div className="education-meta">
              <span className="education-badge">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 0 3 3 6 3s6-3 6-3v-5"/>
                </svg>
                BS Information Technology
              </span>
              <span className="education-badge">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                2023 — 2027
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <h2 className="section-title">Moments Together</h2>
        <div className="gallery-slideshow">
          {galleryImages.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.alt}
              className={`gallery-slide ${index === currentGallery ? 'active' : ''}`}
            />
          ))}
          <div className="gallery-dots">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                className={`gallery-dot ${index === currentGallery ? 'active' : ''}`}
                onClick={() => setCurrentGallery(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedMember && (
        <div className="profile-overlay" onClick={() => setSelectedMember(null)}>
          <div className="profile-popup" onClick={(e) => e.stopPropagation()}>
            <button className="profile-close" onClick={() => setSelectedMember(null)} aria-label="Close">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <div className="profile-top">
              <img src={selectedMember.image} alt={selectedMember.name} className="profile-avatar" />
              <div className="profile-info">
                <h3 className="profile-name">{selectedMember.name}</h3>
                <p className="profile-role">{selectedMember.role}</p>
                <p className="profile-location">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  {selectedMember.location}
                </p>
              </div>
            </div>

            <div className="profile-techstack">
              <h4 className="techstack-title">Tech Stack</h4>
              <div className="techstack-icons">
                {selectedMember.techStack.map((tech, i) => (
                  <span key={i} className="techstack-badge">
                    {techIcons[tech] || null}
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="profile-socials">
              <a href={selectedMember.github} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                <svg viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
                  <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6C29.304 70.198 17.9 65.89 17.9 46.938c0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="currentColor"/>
                </svg>
              </a>
              <a href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href={selectedMember.facebook} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutUs;
