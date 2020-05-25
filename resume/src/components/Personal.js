import React from "react";
import ImageModal from "./ImageModal";
import TravelMap from "./TravelMap";
import Counter from './Counter';

import '../stylesheets/Personal.css'

class Personal extends React.Component {
    state = {isModalOpen: false};

    modalImage = null;
    modalTitle = null;

    openModal = (selectedPlace=null, image=null) => {
        this.modalTitle = selectedPlace;
        this.modalImage= image;
        this.setState({
            isModalOpen : true,
        });
    }

    onCloseModal = () => {
        this.modalTitle = null;
        this.modalImage= null;
        this.setState({
            isModalOpen : false,
        });
    }

    render() {
        return (
            <div>
                <div className="parallax" />
                <div id="personalSection" className="container-fluid pt-5">
                    <div className="row justify-content-between">
                        <div className="col-lg-2 pl-0 pb-lg-5">
                            <h1 className="pl-3">Personal</h1>
                            <div className="d-none d-lg-block rectangle mt-4"></div>
                        </div>
                        <div className="col-lg-10">
                            <p className="ml-3">
                                The latest trek on my ride through life has been one of my most exciting yet. Not only did I finally get to explore new parts of North America, I got to do it all while living out of my van! I realize living in your van has a certain stigma associated with it (especially when it’s down by a river) that would cause many people to question my life choices let alone my financial stability, but it has been a dream of mine ever since buying my first car. Once I decided to relocate, I sold my sedan and upgraded to a Honda Odyssey that I worked on for about 6 months, retrofitting it for a life on the road. This included creating a custom bed, mattress, window covers, sliding stove, and water tank (which is the green eyesore strapped to the roof that piqued most stranger’s curiosity. You can see it on the picture taken in Blue Ridge). The map shown below highlights the route I took across the country to Miami after leaving Yellowstone along with a picture that I took at each stop. This journey helps paint an image of my interests and who I am as a person. I enjoy creating, exploring, and taking risks to see a vision come to fruition. If you have any questions whether it be personally, professionally, or you simply want someone to bounce an idea off, feel free to contact me!
                            </p>
                            <div className="mb-3">
                                <h2 className="mb-0">My Route</h2>
                                <TravelMap onMarkerClicked={this.openModal}/>
                                <Counter />
                            </div>
                        </div>
                    </div>
                    <ImageModal 
                        modalImage={this.modalImage} 
                        modalTitle={this.modalTitle}
                        show={this.state.isModalOpen}
                        onHide={this.onCloseModal}
                    />
                </div>
            </div>
        );
    }
}

export default Personal;