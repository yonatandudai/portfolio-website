import React from 'react';

function About() {
  return (
    <section id="about" className="container">
      <img src="../assets/profile.jpg" alt="Profile" className="profile_image"/>
      <div>
        <h1>Hi, my name is Yonatan Dudai 👋</h1>
        <p>
          I'm a highly motivated BSc Computer Science graduate specializing in Bioinformatics at Ben-Gurion University.
          I have strong programming skills in Python, Java, C, C++, HTML, CSS and JavaScript.
          My academic background includes advanced algorithm design, dynamic programming, server-client architecture, and data analysis techniques.
          Additionally, I bring practical experience as a data analyst,
          where I applied MongoDB and SQL for data extraction, statistical analysis, and reporting.
        </p>
      </div>
    </section>
  );
}

export default About;
