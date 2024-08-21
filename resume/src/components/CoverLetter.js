import React from 'react';

import '../stylesheets/CoverLetter.css'

const CoverLetter = () => {
    return (   
        <div className="mb-3 ml-3">
            <p>
                As a developer I have been blessed with the opportunity to work with intelligent people on multiple projects. Starting my career at National Instruments, I was involved with the release of two key products: LabVIEW NXG and FlexLogger. Utilizing C# with the .NET framework, I worked with multiple teams throughout the entire product lifecycle from design and implementation to testing and maintenance. This experience left me with invaluable insight into the massive amount of collaboration required not only between team members but amongst teams themselves to see something as simple as a product feature through to release.
            </p>
            <div className="collapse multi-collapse" id="moreText">
                <p>
                    My passion since working at NI has been the instant visual feedback I receive through front end development. This attraction led me to start experimenting with website development using HTML, CSS, and JavaScript. Through natural progression I started using MongoDB, Express, React, and Node to create fully fledged web apps, learning primarily through online courses.
                </p>
                <p>
                    My first professional experience with web development came at SafeAuto, where I worked on their website using Gatsby with React. This project allowed me to leverage advanced features like hot reloading and server-side rendering, combining the speed of static-site generation with the scalability of dynamically rendered sites. This experience deepened my understanding of modern web development practices and performance optimization techniques.
                </p>
                <p>
                    Following SafeAuto's acquisition by Allstate, I seized an opportunity to work with Dr. Joost Waganeer at the University of Pennsylvania. There, I contributed to building and maintaining the SPARC Portal, a sophisticated web application built on the Nuxt framework and Vue. This project introduced me to: the power of headless CMS systems, specifically Contentful, for decoupled content management, the advanced search capabilities of Algolia, which utilizes GraphQL for enhanced search and filtering, and the ease and flexibility of UI Frameworks such as Element Plus for easy component design and customization.
                    The SPARC Portal also integrates with numerous other external APIs, including Pennsieve's extensive data repository API, further expanding my expertise in working with complex, data-driven systems. This experience has honed my skills in creating robust, scalable web applications that handle large amounts of data efficiently.
                </p>
            </div>
            <a id="toggleText" className="collapsed" data-toggle="collapse" href="#moreText" aria-expanded="false" aria-controls="moreText"></a>
        </div>
    );
}

export default CoverLetter;