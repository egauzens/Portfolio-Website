import React from 'react';

import '../stylesheets/Projects.css';

const Projects = () => {
    return (   
        <div className="mb-3">
            <h2>Projects</h2>
            <div className="projects-container">
                <img className='circle' src='/sparc.png' alt="SPARC Portal" onClick={() => window.open('https://sparc.science', '_blank')} />
                <img className='circle' src='/uncharted.png' alt="South Florida Uncharted" onClick={() => window.open('https://south-florida-uncharted.onrender.com/', '_blank')} />
                <img className='circle' src='/springsAthletics.png' alt="Springs Athletics" onClick={() => window.open('https://egauzens.github.io/SpringsAthletics/', '_blank')} />
            </div>
        </div>
    );
}

export default Projects;