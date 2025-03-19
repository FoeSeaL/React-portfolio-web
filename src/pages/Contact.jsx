import React from 'react';
import '../styles/contact-page.css';

const Contact = () => {
  return (
    <div className="contact-content">
      <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', marginBottom: '20px' }}>
        Get in Touch
      </h2>

      <div className="contact-grid">
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label>Name</label>
              <input type="text" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea required></textarea>
            </div>
            <button className="btn1">Send Message</button>
          </form>
        </div>

        <div className="contact-info">
          <div className="contact-card">
            <i className="bx bx-envelope"></i>
            <div>
              <h3>Email</h3>
              <p>gunjanrajak2021@gmail.com</p>
            </div>
          </div>
          <div className="contact-card">
            <i className="bx bx-phone"></i>
            <div>
              <h3>Phone</h3>
              <p>9803430362</p>
            </div>
          </div>
          <div className="contact-card">
            <i className="bx bx-location-plus"></i>
            <div>
              <h3>Location</h3>
              <p>Jawalakhel, Lalitpur</p>
            </div>
          </div>
          <div className="contact-card">
            <i className="bx bx-time-five"></i>
            <div>
              <h3>Working Hours</h3>
              <p>Flexible as per need</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;