import React from 'react';
import facebookIcon from '../assets/img/facebook.png';
import instagramIcon from '../assets/img/instagram.png';
import linkedinIcon from '../assets/img/linkedin.png';
import githubIcon from '../assets/img/github.png';

const Contact = () => {
  return (
    <section id="contact" className="contact-section sec-padding">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>Contact Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="contact-form">
            <form method="POST" action="https://formsubmit.co/147ntekim@gmail.com">
              <div className="row">
                <div className="input-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input-control"
                    required
                  />
                </div>
                <div className="input-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input-control"
                    required
                  />
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="input-control"
                    required
                  />
                </div>
                <div className="input-group">
                  <textarea
                    placeholder="Message"
                    name="message"
                    className="input-control"
                    required
                  ></textarea>
                </div>
                <div className="submit-btn">
                  <button type="submit" className="btn">Send Message</button>
                </div>
              </div>
            </form>
          </div>

          <div className="contact-info">
            <div className="contact-info-item">
              <h3>Email</h3>
              <p>147ntekim@gmail.com</p>
            </div>

            <div className="contact-info-item">
              <h3>Follow Me</h3>
              <div className="social-links">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <img src={facebookIcon} alt="Facebook" />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <img src={instagramIcon} alt="Instagram" />
                </a>
                <a href="https://www.linkedin.com/in/joe-ntekim" target="_blank" rel="noopener noreferrer">
                  <img src={linkedinIcon} alt="LinkedIn" />
                </a>
                <a href="https://github.com/0147ntekim" target="_blank" rel="noopener noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;