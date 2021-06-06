import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">

        <div class="top-container">
          <img class="top-cloud" src="images/cloud.png" alt="cloud-img" />
          <h1>I am James.</h1>
          <h2>a <span class="pro">pro</span>grammer</h2>
          <img class="bottom-cloud" src="images/cloud.png" alt="cloud-img" />
          <img class="mountain-img" src="images/mountain.png" alt="mountain-img" />
        </div>

        <section>
          <div class="middle-container">
            <div class="profile">
              <img class="profile-image" src="favicon/192x.png" alt="James img" />
              <h2>Hello.</h2>
              <div class="Intro">
                <p>
                  I am an excellent team player, life-long learner that happens to
                  have a passion for technology and software development. I started
                  coding over 10 years ago.
            </p>
              </div>
            </div>
            <hr />
            <div class="skills">
              <h2>My Skills.</h2>
              <div class="skill-row">
                <img
                  class="bottom-image"
                  src="images/Hatfield-Website-Circular-Icons1.png"
                  alt=""
                />
                <h3>Computer Programming Specialist.</h3>
                <p class="first-paragraph">
                  System Analyst and Design. Project Management. User Interface
                  (UI). Database Admin/Design. Knowledge in C++, C#, Java, Python,
                  Databases (SQL, ORACLE).
            </p>
              </div>
              <div class="skill-row">
                <img
                  class="middle-image"
                  src="images/Hatfield-Website-Circular-Icons4.png"
                  alt=""
                />
                <h3>Web Developer.</h3>
                <p>
                  Web Application Development and Website Development. Knowledge in
                  Javascript, HTML, CSS, C#, .Net, Bootstrap, JQuery, Node.js,
                  Express.js, APIs, Databases (SQL , MongoDB), Mongoose, React.js.
            </p>
              </div>
              <div class="skill-rowWings">
                <img class="third-image" src="images/chillies.png" alt="" />
                <h3>Chicken Wings Connoisseur.</h3>
                <p>
                  But my best skill is actually eating hot wings. Still undisputed
                  champion of hot wings challenges.
            </p>
              </div>
            </div>
            <hr />
            <div class="contact-me">
              <h2>Get In Touch</h2>
              <br />
              <br />
              <h3>Love hot wings?</h3>
              <p class="contact-message">
                Love hot wings as much as I do? Let's talk about how good they are.
                We can code while eating hot wings!
          </p>
              <a class="btn" href="mailto:james__alexander@hotmail.com"
              >CONTACT ME</a
              >
            </div>
          </div>
        </section>

        <div class="bottom-container">
          <a
            class="footer-link"
            href="https://www.linkedin.com/in/james-alexander-8b57411b2/"
          >LinkedIn</a
          >
          <a
            class="footer-link"
            href="https://github.com/Jalexander01?tab=repositories"
          >Repository</a
          >
          <p class="copyright">© 2021 James Alexander.</p>
        </div>
      </div>
    )
  }
}

export default App;
