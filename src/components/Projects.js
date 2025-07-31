import React from 'react';
import './Projects.css';

const projectList = [
  {
    title: "HomelyHub (Airbnb Clone)",
    description: "A MERN stack application to rent homes online with features like booking, listing, and reviews.",
    link: "https://github.com/anandganta/homelyhub"
  },
  {
    title: "Diabetes Prediction",
    description: "ML model using Pima Indian dataset, feature selection, and advanced classifiers like CatBoost & XGBoost.",
    link: "https://github.com/anandganta/diabetes-predict"
  },
  {
    title: "Recipe Manager",
    description: "A Java-based layered architecture project for creating and managing recipe collections.",
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
