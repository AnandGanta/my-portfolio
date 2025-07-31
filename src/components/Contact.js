import React from 'react';
import './Contact.css';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>Feel free to reach out for collaboration, internships, or just to say hello!</p>

      <div className="contact-info">
        <p>
          <MdEmail className="icon" />
          <strong>Email:</strong>{' '}
          <a href="mailto:sanjuganta11@gmail.com">sanjuganta11@gmail.com</a>
        </p>
        <p>
          <FaLinkedin className="icon" />
          <strong>LinkedIn:</strong>{' '}
          <a
            href="https://www.linkedin.com/in/anandganta000/"
            target="_blank"
            rel="noreferrer"
          >
            Anand Ganta
          </a>
        </p>
        <p>
          <FaGithub className="icon" />
          <strong>GitHub:</strong>{' '}
          <a
            href="https://github.com/AnandGanta"
            target="_blank"
            rel="noreferrer"
          >
            AnandGanta
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
