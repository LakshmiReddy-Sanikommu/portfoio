import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="section container">
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <h2 className="section-title reveal" style={{ marginBottom: '1rem' }}>Professional Journey</h2>
        <p className="reveal reveal-delay-1" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>My career path and achievements</p>
      </div>
      
      <div className="modern-timeline">
        {portfolioData.experience.map((exp, index) => (
          <div key={index} className="modern-timeline-item reveal" style={{ transitionDelay: `${index * 0.15}s` }}>
            <div className="modern-timeline-dot"></div>
            <div className="modern-timeline-content">
              <div className="timeline-date-badge">
                {exp.duration}
              </div>
              <div className="timeline-card">
                <h3 className="timeline-role">{exp.role}</h3>
                <h4 className="timeline-company text-gradient">@ {exp.company}</h4>
                <p className="timeline-location" style={{ marginTop: '0.5rem' }}>📍 {exp.location}</p>
                <ul className="timeline-list">
                  {exp.achievements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
