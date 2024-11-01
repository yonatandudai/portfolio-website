import React from 'react';

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="all_skills">
      <div className="skill">
          <img src="../assets/java.png" target="_blank" alt="Java icon"/>
          <h6>Java</h6>
        </div>
        <div className="skill">
          <img src="../assets/python.png" target="_blank" alt="Python icon"/>
          <h6>Python</h6>
        </div>
        <div className="skill">
          <img src="../assets/html5.png" target="_blank" alt="HTML icon"/>
          <h6>HTML</h6>
        </div>
        <div className="skill">
          <img src="../assets/CSS3.png" target="_blank" alt="HTML icon"/>
          <h6>CSS</h6>
        </div>
        <div className="skill">
          <img src="../assets/js.jpeg" target="_blank" alt="HTML icon"/>
          <h6>JavaScript</h6>
        </div>
        <div className="skill">
          <img src="../assets/react.png" target="_blank" alt="HTML icon"/>
          <h6>React</h6>
        </div>
        <div className="skill">
          <img src="../assets/node.png" target="_blank" alt="HTML icon"/>
          <h6>Node.js</h6>
        </div>
        <div className="skill">
          <img src="../assets/mongo.png" target="_blank" alt="HTML icon"/>
          <h6>MongoDB</h6>
        </div>
        <div className="skill">
          <img src="../assets/c-logo.png" target="_blank" alt="HTML icon"/>
          <h6>C</h6>
        </div>
        <div className="skill">
          <img src="../assets/C-plus-logo.png" target="_blank" alt="HTML icon"/>
          <h6>C++</h6>
        </div>
        {/* Repeat for other skills */}
      </div>
    </section>
  );
}

export default Skills;
