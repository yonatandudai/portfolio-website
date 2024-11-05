import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <h3>Click on the headings to see the Github repositories</h3>

      <div className="project-card">
        <a href='https://github.com/yonatandudai/portfolio-website' target='_blank' rel='noreferrer noopener'>
          <h3>Portfolio Website</h3>
        </a>
        <p>
          Personal portfolio website showcasing projects, experience, and skills, designed with a modern, responsive UI. 
          Built as a full-stack application with React on the frontend and an Express backend, integrating contact form submissions 
          using SendGrid and custom styling with CSS for a seamless user experience. (React, Node.js, Express, CSS)
        </p>
      </div>

      <div className="project-card">
        <a href='https://github.com/yonatandudai/ToDo-List-App' target='_blank' rel='noreferrer noopener'>
        <h3> Full-stack ToDo-List Application</h3>
        </a>
        <p>
          Task management app with features like task creation, editing, deletion, deadlines, and completion tracking. 
          Designed a responsive UI and integrated RESTful API endpoints to manage tasks and interact with the database. 
          (Node.js, MongoDB, HTML, CSS, JavaScript)
        </p>
      </div>

      <div className="project-card">
        <a href='https://github.com/yonatandudai/Football-Quiz-App' target='_blank' rel='noreferrer noopener'>
        <h3>Front-End Trivia Quiz Application</h3>
        </a>
        <p>
          Football trivia app with random question generation, timed sessions, and a persistent scoreboard using local storage. 
          Integrated user experience features like username switching and interactive buttons. (HTML, CSS, JavaScript)
        </p>
      </div>

      <div className="project-card">
      <a href='https://github.com/yonatandudai/Nussinov-Jacobson-Implementation' target='_blank' rel='noreferrer noopener'>
        <h3>RNA Structure Prediction</h3>
       </a> 
        <p>
          Implemented the Nussinov-Jacobson algorithm to predict RNA secondary structures, with a focus on dynamic programming 
          techniques. Results were compared with Mfold and experimental data. (Python)
        </p>
      </div>
    </section>
  );
}

export default Projects;
