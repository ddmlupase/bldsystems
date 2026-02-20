import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Project Alpha',
      description: 'Our first collaborative project — a foundation that taught us teamwork and problem-solving.',
      tag: '1st Year',
    },
    {
      title: 'Project Beta',
      description: 'An ambitious undertaking that pushed our skills to the next level.',
      tag: '2nd Year',
    },
    {
      title: 'Project Gamma',
      description: 'A complex system built with modern technologies and real-world applications.',
      tag: '3rd Year',
    },
    {
      title: 'Project Delta',
      description: "Our capstone — the culmination of everything we've learned throughout college.",
      tag: '4th Year',
    },
  ];

  return (
    <div className="projects-page">
      <section className="projects-hero">
        <h1 className="projects-title">Projects</h1>
        <p className="projects-subtitle">Four years. Countless hours. Here's what we built.</p>
      </section>

      <section className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <span className="project-tag">{project.tag}</span>
            <h3 className="project-name">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Projects;
