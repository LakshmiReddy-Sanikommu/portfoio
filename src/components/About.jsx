import React from 'react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="section container">
      <div className="about-minimalist reveal">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-card-modern glass-panel">
          <div className="about-header-modern">
            <h3 className="text-gradient">3+ Years of Full-Stack Excellence</h3>
            <p className="about-tagline">Software Engineer based in {portfolioData.personal.location}</p>
          </div>

          <p className="about-summary-modern">
            {portfolioData.summary}
          </p>

          <div className="about-footer-modern">
            <div className="about-contact-modern">
              <div className="contact-item-modern">
                <span className="icon">📍</span>
                <div className="text">
                  <span className="label">Location</span>
                  <span className="value">{portfolioData.personal.location}</span>
                </div>
              </div>
              <div className="contact-item-modern">
                <span className="icon">✉️</span>
                <div className="text">
                  <span className="label">Email</span>
                  <span className="value">{portfolioData.personal.email}</span>
                </div>
              </div>
              <div className="contact-item-modern">
                <span className="icon">📞</span>
                <div className="text">
                  <span className="label">Phone</span>
                  <span className="value">{portfolioData.personal.phone}</span>
                </div>
              </div>
            </div>
            
            <div className="about-cta-modern">
              <a href={portfolioData.personal.resumeLink} className="btn btn-primary">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
