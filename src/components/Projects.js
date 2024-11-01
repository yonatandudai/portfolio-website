import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="project-card">
        <h3>Full-stack ToDo-List Application</h3>
        <p>
          Task management app with features like task creation, editing, deletion, deadlines, and completion tracking. 
          Designed a responsive UI and integrated RESTful API endpoints to manage tasks and interact with the database. 
          (Node.js, MongoDB, HTML, CSS, JavaScript)
        </p>
      </div>

      <div className="project-card">
        <h3>Front-End Trivia Quiz Application</h3>
        <p>
          Football trivia app with random question generation, timed sessions, and a persistent scoreboard using local storage. 
          Integrated user experience features like username switching and interactive buttons. (HTML, CSS, JavaScript)
        </p>
      </div>

      <div className="project-card">
        <h3>RNA Structure Prediction</h3>
        <p>
          Implemented the Nussinov-Jacobson algorithm to predict RNA secondary structures, with a focus on dynamic programming 
          techniques. Results were compared with Mfold and experimental data. (Python)
        </p>
      </div>

      <div className="project-card">
        <h3>Social Network Simulation</h3>
        <p>
          Simulation of a social network using server-client architecture in Linux. Implemented user authentication, real-time 
          messaging, and data management, utilizing socket programming for efficient multi-client communication. (Java, C++)
        </p>
      </div>

    </section>
  );
}

export default Projects;
