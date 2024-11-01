import React from 'react';

function NavBar() {
  return (
    <nav>
      <div className="profile_name">
        Yonatan Dudai
        <div className="contact_info">
          <img src="../assets/envelope.png" alt="email icon" />
          yonatandu@outlook.com
        </div>
        <div className="contact_info">
          <img src="../assets/phone.png" alt="phone icon" />
          0526848228
        </div>
      </div>
      <div className="topmenu">
        <a href="#about">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default NavBar;
