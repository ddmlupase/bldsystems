import React from 'react';
import './AboutUs.css';
import member1 from '../assets/member1.jpg';
import member2 from '../assets/member2.jpg';
import member3 from '../assets/member3.jpg';

function AboutUs() {
  const members = [
    {
      name: 'Member One',
      role: 'Walay Pulos',
      description: 'Pabigat ra ang boang',
      image: member1,
    },
    {
      name: 'Member Two',
      role: 'Full Stack Developer',
      description: 'Passionate about building elegant solutions and crafting clean code.',
      image: member2,
    },
    {
      name: 'Member Three',
      role: 'Full Stack Developer',
      description: 'Driven by curiosity and a love for solving complex problems.',
      image: member3,
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
            <div className="member-card" key={index}>
              <img src={member.image} alt={member.name} className="member-avatar" />
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-desc">{member.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
