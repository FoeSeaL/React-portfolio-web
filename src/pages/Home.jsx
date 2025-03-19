import React from 'react';
import 'boxicons/css/boxicons.min.css';
const Home = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-info">
          <h2>Hi, I'm <br />Gunjan Rajak</h2>
          <h3>I'm a fullstack developer</h3>
          <p>
            Hi, I'm Gunjan, a passionate full-stack developer with expertise in React for front-end development and Django for the back end. I enjoy crafting user-friendly interfaces, optimizing back-end systems, and continuously learning new technologies to improve my skills.
          </p>
          <div className="buttons">
            <button className="btn1">Hire me</button>
            <ul className="ul-icons">
              <li>
                <a href=""><i className="bx bxl-github"></i></a>
              </li>
              <li>
                <a href=""><i className="bx bxl-twitter"></i></a>
              </li>
              <li>
                <a href=""><i className="bx bxl-youtube"></i></a>
              </li>
              <li>
                <a href=""><i className="bx bxl-facebook-circle"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="hero-img">
          <img src="src/assets/images/me.png" alt="person-image" />
        </div>
      </div>

      <div className="info-sec">
        <div className="info-card">
          <h2>x+</h2>
          <p>
            Years of <br /> Experience
          </p>
        </div>
        <div className="info-card">
          <h2>3+</h2>
          <p>
            Technical <br /> Skills
          </p>
        </div>
        <div className="info-card">
          <h2>10+</h2>
          <p>
            Projects <br /> Completed
          </p>
        </div>
        <div className="info-card">
          <h2>x+</h2>
          <p>
            Satisfied <br /> Clients
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;