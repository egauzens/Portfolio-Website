import React from 'react';

import CoverLetter from './CoverLetter'
import Experience from './Experience'
import Education from './Education'
import '../stylesheets/Resume.css'

class Resume extends React.Component {
    render() {
        return (
            <div id="resumeSection" className="container-fluid py-5">
                <div className="row justify-content-between">
                    <div className="col-lg-2 pl-0">
                        <h1 className="pl-3">Resume</h1>
                        <div className="d-none d-lg-block rectangle mt-4"></div>
                    </div>
                    <div className="col-lg-10">
                        <CoverLetter />
                        <Experience />
                        <Education />
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;