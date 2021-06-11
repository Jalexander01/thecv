import React from 'react';
import './CSS/styles.css';

const year = new Date().getFullYear();

function Footer() {

    return (
        <div class="bottom-container">
            <a class="footer-link" href="https://www.linkedin.com/in/james-alexander-8b57411b2/">LinkedIn</a>
            <a class="footer-link" href="https://github.com/Jalexander01?tab=repositories">Repository</a>
            <p class="copyright">© {year} James Alexander.</p>
        </div>

    )
}

export default Footer;