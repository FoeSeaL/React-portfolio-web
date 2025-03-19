import React from 'react';
import '../styles/skills-page.css';

const Skills = () => {
  return (
    <div className="skills-content">
      <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', marginBottom: '20px' }}>
        My Skills
      </h2>

      <div className="skills-grid">
        <div className="skill-category">
          <h3>Frontend Development</h3>
          <div className="skill-bar">
            <div className="skill-info">
              <span>HTML/CSS</span>
              <span>80%</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className="skill-bar">
            <div className="skill-info">
              <span>JavaScript</span>
              <span>65%</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: '65%' }}></div>
            </div>
          </div>
          <div className="skill-bar">
            <div className="skill-info">
              <span>React</span>
              <span>80%</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: '80%' }}></div>
            </div>
          </div>
        </div>

        <div className="skill-category">
          <h3>Backend Development</h3>
          <div className="skill-bar">
            <div className="skill-info">
              <span>Python</span>
              <span>85%</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div className="skill-bar">
            <div className="skill-info">
              <span>Django</span>
              <span>80%</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className="skill-bar">
            <div className="skill-info">
              <span>SQL</span>
              <span>75%</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>

        <div className="skill-category">
          <h3>Tools & Technologies</h3>
          <div className="skill-bar">
            <div className="skill-info">
              <span>Git</span>
              <span>85%</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: '85%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;