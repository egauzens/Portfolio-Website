import React from "react";

import {Marker} from "react-simple-maps";

class TravelMapMarker extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {hoveredOverPlace: null};
    }

    onMouseEnterMarker(name) {
        this.setState({hoveredOverPlace : name});
    }

    onMouseLeaveMarker() {
        this.setState({hoveredOverPlace : null});
    }

    renderCircle(name) {
        return name === this.state.hoveredOverPlace ? 
            <circle r={5} fill='darkorange' style={{ cursor: "pointer" }}/> :
            <circle r={3} fill='darkorange' style={{ cursor: "pointer" }}/>;
    }

    onMarkerClicked = (name, image) => {
        this.props.onMarkerClicked(name, image);
    }

    render() {
        const {name, coordinates, abbreviation, yMarkerOffset, xMarkerOffset, image} = this.props;
        return (
            <Marker onMouseLeave={() => this.onMouseLeaveMarker()} onMouseEnter={() => this.onMouseEnterMarker(name)} onClick={() => this.onMarkerClicked(name, image)} key={name} coordinates={coordinates}>
                {this.renderCircle(name)}
                <text
                    textAnchor="middle"
                    y={yMarkerOffset}
                    x={xMarkerOffset}
                    style={{ fontFamily: "system-ui", fill: "#5D5A6D", cursor: "pointer" }}
                >
                    {abbreviation}
                </text>
            </Marker>
        );
    }
}

export default TravelMapMarker;