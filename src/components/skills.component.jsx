import React from 'react';
import './CSS/styles.css';
import chillies from './images/chillies.png';
import pc from './images/Hatfield-Website-Circular-Icons1.png';
import tags from './images/Hatfield-Website-Circular-Icons4.png';

function Skills() {

    return (

        <div>

            <div class="skills">
                <h2>My Skills.</h2>
                <div class="skill-row">
                    <img class="bottom-image" src={pc} alt="computer" />
                    <h3>Computer Programming Specialist.</h3>
                    <p class="first-paragraph"> System Analyst and Design. Project Management. User Interface (UI). Database Admin/Design. Knowledge in C++, C#, Java, Python, Databases (SQL, ORACLE).</p>
                </div>
                <div class="skill-row">
                    <img class="middle-image" src={tags} alt="computer" />
                    <h3>Web Developer.</h3>
                    <p> Web Application Development and Website Development. Knowledge in Javascript, HTML, CSS, C#, .Net, Bootstrap, JQuery, Node.js, Express.js, APIs, Databases (SQL , MongoDB), Mongoose, React.js.</p>
                </div>
                <div class="skill-rowWings">
                    <img class="third-image" src={chillies} alt="chilli" />
                    <h3>Chicken Wings Connoisseur.</h3>
                    <p>But my best skill is actually eating hot wings. Still undisputed champion of hot wings challenges.</p>
                </div>
            </div>

        </div>

    )
}

export default Skills;