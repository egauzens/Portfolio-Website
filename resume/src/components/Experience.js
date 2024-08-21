import React from 'react';

import '../stylesheets/Experience.css';

const Experience = () => {
    return (   
        <div className="mb-3">
            <h2>Experience</h2>
            <div className="timeline">
                <div className="container right">
                    <div className="content">
                        <strong><p>Technical Lead</p></strong>
                        <p className="mb-2">Wagenaar Lab<br/>University of Pennsylvania</p>
                        <p>Sep 2021 - Sep 2025</p>
                    </div>
                </div>
                <div className="container left">
                    <div className="content">
                        <strong><p>Web Developer</p></strong>
                        <p className="mb-2">SafeAuto</p>
                        <p>Apr 2021 - Sep 2021</p>
                    </div>
                </div>
                <div className="container right">
                    <div className="content">
                        <strong><p>Staff Software Engineer</p></strong>
                        <p className="mb-2">National Instruments</p>
                        <p>Oct 2017 - May 2019</p>
                    </div>
                </div>
                <div className="container left">
                    <div className="content">
                        <strong><p>Software Engineer</p></strong>
                        <p className="mb-2">National Instruments</p>
                        <p>Aug 2016 - Sep 2017</p>
                    </div>
                </div>
                <div className="container right">
                    <div className="content">
                        <strong><p>Software Engineer Internship</p></strong>
                        <p className="mb-2">National Instruments</p>
                        <p>May 2015 - Aug 2015</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;