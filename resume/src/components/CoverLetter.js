import React from 'react';

import '../stylesheets/CoverLetter.css'

const CoverLetter = () => {
    return (   
        <div className="mb-3 ml-3">
            <p>
                As a developer I have been blessed with the opportunity to work with intelligent people on multiple projects at a very hands-on company. Since the start of my career at National Instruments I have been involved with the release of two key products: LabVIEW NXG and FlexLogger. Utilizing C# with the .NET framework, I have worked with multiple teams throughout the entire product lifecycle from design and implementation to testing and maintenance. This experience has left me with invaluable insight into the massive amount of collaboration required not only between team members but amongst teams themselves to see something as simple as a product feature through to release.
            </p>
            <div className="collapse multi-collapse" id="moreText">
                <p>
                    In 2018 I realized I wanted to move back to south Florida to be closer to friends and family, but along the way I sought to go out west in what could only be described as a personal desire to achieve Manifest Destiny. After visiting Yellowstone, a year earlier, I was inspired to get a job there to fully immerse myself in the experience.
                </p>
                <p>
                    In the same manner I was drawn to computers, I have always been drawn to the allure of the unknown innerworkings of automobiles. It would always irk me that I knew so little about something that I used so much. So, once I learned of an opening for a mechanic in the park, I immediately began mapping my course. I enrolled at Austin Community College and started taking night classes after work to gain experience and qualify for the position.
                </p>
                <p>
                    Working at Yellowstone was similar to the urgency that is expressed when handling a showstopper bug on a new release after having already shipped to customers. Except at all times. After arriving, in addition to helping customers with their car troubles, I quickly had to learn how to drive stick shift on a 10,000-pound tow truck going up 3,000 foot elevation gains and make recoveries for malfunctioning or crashed vehicles that were often off-road or overturned. The hectic nature of the job however was easily offset by the feeling of fulfillment received when helping a stranded customer. While the physically duties of being a mechanic starkly contrasted with the mental ones of a programmer, I found the most vital quality remained constant through both: communication. Whether it be discussing how a chunk of code is behaving or what the optimal angle of attack should be when making a recovery, communication is key in sharing resources and understanding to help one another grow and become better.
                </p>
                <p>
                    This is the concept that I was left reflecting on as I packed up my van on my last day of work at Yellowstone and began my journey down the west coast. The importance of communication became even more prevalent as I traveled in my van sleeping at a new spot every night. I made the occasional friend along the way but I was sure there were more people with similar interests as me that I could share some of these amazing experiences with, if only there were a means to find them. This led me to the idea for creating an app to help connect people with shared interests.
                </p>
                <p>
                    I created ExerciseBuddy with the intent of enabling solo travelers such as myself to meet other people with similar interests who would like to do an activity together, whether it be hiking, biking, rocking climbing, etc. With help from colleagues I met at NI, I was able to create a working prototype using the Android SDK along with Firebase. The desire to reach iOS users soon had me researching the React framework, specifically React Native, which sounded like the solution to my problem of having to upkeep two codebases. I realized that to learn React I would first have to familiarize myself with JavaScript, and what better way to do that than through website development?
                </p>
                <p>
                    My passion since working at NI has been the instant visual feedback I receive through front end development. This attraction led me to start experimenting with website development using HTML, CSS, and JavaScript. Through natural progression I started using MongoDB, Express, React, and Node to create fully fledged web apps, learning primarily through online Udemy courses.
                </p>
                <p>
                    As I have been learning these new technologies, my interests have shifted more towards web-based apps. For now, I am putting ExerciseBuddy on hold as I look for an opportunity to apply my newly gained knowledge in a professional setting. Mastering the techniques required to build and test a web-based user facing product will not only help me when working to complete my app but also allow time for new frameworks such as Flutter to mature and show their true potential as possible solutions for porting one code base to two platforms.
                </p>
            </div>
            <a id="toggleText" className="collapsed" data-toggle="collapse" href="#moreText" aria-expanded="false" aria-controls="moreText"></a>
        </div>
    );
}

export default CoverLetter;