import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  return (
    <section id="contact" className="section container" style={{ textAlign: 'center' }}>
      <h2 className="section-title reveal">Get In Touch</h2>
      <div className="glass-panel reveal reveal-delay-1" style={{ maxWidth: '600px', margin: '0 auto', padding: '4rem 2rem' }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Interested in working together?</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
          Whether you have a question, a project idea, or just want to say hi, feel free to reach out. I'm always open to discussing new opportunities and challenges.
        </p>
        <a href={`mailto:${portfolioData.personal.email}`} className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '16px 40px' }}>
          Say Hello
        </a>
      </div>

      <footer style={{ marginTop: '100px', paddingBottom: '30px', color: 'var(--text-tertiary)', fontSize: '0.9rem' }}>
        <p>© {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
