import React from 'react';
import { portfolioData } from '../data/portfolioData';

const MarqueeRow = ({ items, reverse }) => {
  // Duplicate items to ensure smooth infinite scrolling
  const scrollItems = [...items, ...items, ...items, ...items];
  
  return (
    <div className="marquee-container">
      <div className={`marquee-content ${reverse ? 'reverse' : ''}`}>
        {scrollItems.map((skill, idx) => (
          <div key={idx} className="marquee-item">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  // Combine all skills and split into 3 rows for the marquee
  const allSkills = Object.values(portfolioData.skills).flat();
  const third = Math.ceil(allSkills.length / 3);
  
  const row1 = allSkills.slice(0, third);
  const row2 = allSkills.slice(third, third * 2);
  const row3 = allSkills.slice(third * 2);

  return (
    <section id="skills" className="section" style={{ overflow: 'hidden', padding: '120px 0' }}>
      <div className="container">
        <h2 className="section-title reveal" style={{ marginBottom: '4rem' }}>Technical Arsenal</h2>
      </div>
      
      <div className="skills-marquee-wrapper reveal reveal-delay-1">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse={true} />
        <MarqueeRow items={row3} />
      </div>
    </section>
  );
};

export default Skills;
