import React from 'react';
import Header from './Header';
import SubHeader from './SubHeader';
import CoverPhoto from './CoverPhoto';
import Resume from './Resume';
import Personal from './Personal';
import ContactForm from './ContactForm';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <SubHeader />
                <CoverPhoto imgSrc='/cover-photo.JPG' />
                <Resume />
                <Personal />
                <CoverPhoto className="d-lg-none mb-5" imgSrc='/headshot.JPG' />
                <ContactForm />
            </div>
        );
    }
}

export default App;