import React from 'react';
import '../styles/project-page.css';

const Projects = () => {
  return (
    <div className="projects-content">
      <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', marginBottom: '20px' }}>
        My Projects
      </h2>

      <div className="filter-buttons">
        <button className="filter-btn active">All</button>
        <button className="filter-btn">Web Apps</button>
      </div>

      <div className="projects-grid">
        {/* Project 1 */}
        <div className="project-card">
          <div className="project-image">
            <img src="src/assets/images/nepal wanders.png" alt="tourist platform" />
          </div>
          <div className="project-info">
            <h3>Nepal Wander</h3>
            <p>
              A responsive travel website built with HTML, CSS, and JavaScript, featuring interactive maps, destination highlights, and a user-friendly design.
            </p>
            <div className="project-tags">
              <span className="tag">HTML</span>
              <span className="tag">CSS</span>
              <span className="tag">JavaScript</span>
            </div>
            <div className="project-links">
              <a href="https://foeseal.github.io/Nepal-Wander/" target="_blank" rel="noreferrer">
                <i className="bx bx-link-external"></i> Live Demo
              </a>
              <a href="https://github.com/FoeSeaL/Nepal-Wander" target="_blank" rel="noreferrer">
                <i className="bx bxl-github"></i> Source Code
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <div className="project-image">
            <img src="src/assets/images/flashcard.png" alt="FlashCard App" />
          </div>
          <div className="project-info">
            <h3>FlashCard App</h3>
            <p>
              A flashcard web application built with Django and bootstrap, featuring user authentication, deck management, progress tracking, and a responsive design.
            </p>
            <div className="project-tags">
              <span className="tag">Django</span>
              <span className="tag">Python</span>
              <span className="tag">bootstrap</span>
            </div>
            <div className="project-links">
              <a href="#">
                <i className="bx bx-link-external"></i> Live Demo
              </a>
              <a href="https://github.com/FoeSeaL/flashcard-project">
                <i className="bx bxl-github"></i> Source Code
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <div className="project-image">
            <img src="src/assets/images/nepal khabar.png" alt="nepalkhabar" />
          </div>
          <div className="project-info">
            <h3>Nepal Khabar</h3>
            <p>
              A responsive news aggregator web application built with bootstrap, featuring real-time news updates, category-based filtering, and a clean UI.
            </p>
            <div className="project-tags">
              <span className="tag">JavaScript</span>
              <span className="tag">bootstrap</span>
              <span className="tag">HTML</span>
            </div>
            <div className="project-links">
              <a href="https://foeseal.github.io/Nepal-khabar/">
                <i className="bx bx-link-external"></i> Live Demo
              </a>
              <a href="https://github.com/FoeSeaL/Nepal-khabar">
                <i className="bx bxl-github"></i> Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;