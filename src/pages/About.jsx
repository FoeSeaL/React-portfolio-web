import React from 'react';
import '../styles/about-page.css';

const About = () => {
  return (
    <div className="about-content">
      <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', marginBottom: '20px' }}>
        About Me
      </h2>

      <div className="about-grid">
        <div className="about-card">
          <h3>Background</h3>
          <p>
            I'm a passionate full-stack developer with a strong foundation in computer science. My journey in programming began during my high-school years, and I've been continuously expanding my skills ever since.
          </p>
        </div>

        <div className="about-card">
          <h3>Education</h3>
          <p>
            Plus two degree in Computer Science with maths. I've also completed numerous certifications in modern web technologies.
          </p>
        </div>

        <div className="about-card">
          <h3>Work Philosophy</h3>
          <p>
            I believe in writing clean, maintainable code and creating intuitive user experiences. My approach combines technical expertise with creative problem-solving to deliver optimal solutions.
          </p>
        </div>

        <div className="about-card">
          <h3>Interests</h3>
          <p>
            Beyond coding, I'm passionate about staying updated with the latest tech trends, contributing to open-source projects, and mentoring aspiring developers in my community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;