import React from 'react';
import './CSS/styles.css';
import image1 from './images/cloud.png';
import image2 from './images/mountain.png';

function Header() {

    return (
        <div class="top-container">
            <img class="top-cloud" src={image1} alt="cloud-img" />
            <h1>I am James.</h1>
            <h2> a <span class="pro">pro</span>grammer</h2>
            <img class="bottom-cloud" src={image1} alt="cloud-img" />
            <img class="mountain-img" src={image2} alt="mountain-img" />

        </div>
    )
}

export default Header;