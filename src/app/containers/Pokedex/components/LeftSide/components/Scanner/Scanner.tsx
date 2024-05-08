import React from 'react';

import './styles.css';

const Scanner = () => {
    return <section className="scannerContainer">
        <svg viewBox="0 0 100 100">
        <circle fill="#e5a3a6" cx="50" cy="50" r="6.15"/>
            <circle fill="#ebebf5" cx="50" cy="50" r="6"/>
            <circle fill="#a1b9cf" cx="50" cy="50" r="5.5"/>
            <circle fill="#619ddb" cx="50" cy="50" r="5.25"/>
            <polygon points="47,51, 51,51, 51,47 47,47" fill="white" transform="rotate(90 0 0)"/>
        </svg>
    </section>
}

// inner circle : #9ad7fe
// middle circle: #27aafd
// outer circle: #186a9e
// outermost circle: #dadada

export default Scanner;