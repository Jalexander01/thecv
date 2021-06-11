import React from 'react';
import './CSS/styles.css';
import image from './images/192x.png';

function Avatar(props) {

    return (<div className="profile">
        <img class="profile-image" src={image} alt="James img" />
    </div>)

}

export default Avatar;