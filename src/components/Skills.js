import React from 'react';
import './Skills.css';

const skills = [
  'HTML', 'CSS', 'JavaScript', 'React',
  'Node.js', 'MongoDB', 'MySQL',
  'Python', 'Java', 'Machine Learning'
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
