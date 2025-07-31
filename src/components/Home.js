import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="content">
        <h1>Hi, I'm Anand Ganta</h1>
        <p>Aspiring Software Professional</p>
        <div className="buttons">
          <a href="https://drive.google.com/your-resume-link" target="_blank" rel="noreferrer">
            <button>View Resume</button>
          </a>
          <a href="#contact">
            <button className="contact">Contact Me</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
