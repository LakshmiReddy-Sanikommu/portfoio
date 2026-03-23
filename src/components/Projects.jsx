import React, { useRef } from 'react';
import { portfolioData } from '../data/portfolioData';

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation limits (max 8 degrees)
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transition = 'none'; // Disable transition for instant track
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'; // Smooth snap back
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  const getImagePath = (path) => {
    if (!path) return '';
    if (path.startsWith('http')) return path;
    const cleanPath = path.startsWith('/') ? path.substring(1) : path;
    return `${import.meta.env.BASE_URL}${cleanPath}`;
  };

  return (
    <div
      ref={cardRef}
      className="project-card reveal"
      style={{ transitionDelay: `${index * 0.2}s` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-image-container">
        {project.image ? (
          <img src={getImagePath(project.image)} alt={project.title} className="project-image" />
        ) : (
          <div className="project-image-placeholder"></div>
        )}
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-tech text-gradient">{project.tech}</p>
        <p className="project-description">{project.description}</p>
        <div style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '8px 20px', fontSize: '0.9rem' }} onClick={() => setMenuOpen(false)}>View Details</a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section container">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className="section-title reveal" style={{ marginBottom: '1rem' }}>Featured Projects</h2>
        <p className="reveal reveal-delay-1" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>Some of the impactful solutions I've built</p>
      </div>

      <div className="projects-grid">
        {portfolioData.projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
