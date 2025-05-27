import React from "react";
import "./../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1 className="about-title">About Me</h1>

        <p className="about-text">
          Hi, I'm <span className="highlight">Sakar Dahal</span>, the creator of this site. I'm passionate about web development and created this platform to deepen my understanding of how APIs connect Django and React.
        </p>

        <p className="about-text">
          This project explores the integration of React and Django, with a focus on secure and functional authentication mechanisms using token-based authentication. Here's a quick overview of what this app implements:
        </p>

        <ul className="about-list">
          <li>
            ✅ Account activation via email verification.
          </li>
          <li>
            🔐 Token-based authentication to manage user sessions and preserve login state.
          </li>
          <li>
            🔁 Password reset via email and secure password change while logged in.
          </li>
          <li>
            ✏️ Profile update functionality, allowing users to manage their personal information.
          </li>
        </ul>

        <p className="about-text">
          This project was built as a learning tool to better understand real-world authentication systems in full-stack applications. It's far from perfect — I'm still learning and growing — but it's been a great exercise in connecting backend logic with frontend experience.
        </p>

        <p className="about-text">
          You can explore the code here:
        </p>

        <div className="about-links">
          <a href="https://github.com/SakarDahal04/URL-Shortner-project" target="_blank" rel="noopener noreferrer">
            📦 Frontend Repository
          </a>
          <a href="https://github.com/SakarDahal04/URL-Shortner-project" target="_blank" rel="noopener noreferrer">
            🗄️ Backend Repository
          </a>
        </div>

        <br />
        <p className="about-text">Feel free to connect with me:</p>

        <div className="about-links">
          <a href="https://github.com/SakarDahal04" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/sakar-dahal-30a560277/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:sakardahal1234@gmail.com">Email</a>
        </div>
      </div>
    </div>
  );
};

export default About;
