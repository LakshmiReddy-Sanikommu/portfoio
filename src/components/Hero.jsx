import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  return (
    <section id="home" className="hero section container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap-reverse', gap: '4rem' }}>
      <div className="hero-content" style={{ flex: '1 1 500px' }}>
        <p className="reveal text-gradient" style={{ fontWeight: 600, letterSpacing: '2px', marginBottom: '1rem', textTransform: 'uppercase' }}>
          Hello, I am
        </p>
        <h1 className="reveal reveal-delay-1 hero-title">
          {portfolioData.personal.name}
        </h1>
        <h2 className="reveal reveal-delay-2 hero-subtitle">
          {portfolioData.personal.title} <br /> based in {portfolioData.personal.location}
        </h2>
        <p className="reveal reveal-delay-3 hero-description">
          I build scalable RESTful APIs, front-end applications, and cloud-native deployments with a passion for designing excellent user experiences.
        </p>
        <div className="reveal hero-cta" style={{ transitionDelay: '0.4s', marginTop: '2.5rem', display: 'flex', gap: '1rem' }}>
          <a href="#experience" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-outline">Get In Touch</a>
        </div>
      </div>

      {/* Visual Avatar Container */}
      <div className="hero-image reveal" style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center', transitionDelay: '0.2s' }}>
        <div style={{ position: 'relative', width: '100%', maxWidth: '450px', aspectRatio: '1/1', borderRadius: '50%', background: 'var(--glass-bg)', border: '2px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
          <img
            src={`${import.meta.env.BASE_URL}avatar.png`}
            alt="Avatar"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={(e) => {
              // Fallback if the user hasn't added the image yet
              e.target.src = "https://ui-avatars.com/api/?name=Sri+Lakshmi&background=6366f1&color=fff&size=512";
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
