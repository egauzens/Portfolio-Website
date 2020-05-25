import React from "react";
import MarkersInfo from './MarkersInfo';
import TravelMapMarker from './TravelMapMarker';

import {
  ComposableMap,
  Geographies,
  Geography,
  Line
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const TravelMap = ({ onMarkerClicked }) => {
    return (
        <ComposableMap projection="geoAlbersUsa">
            <Geographies geography={geoUrl}>
                {({ geographies }) =>
                geographies
                    .map(geo => (
                    <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#EAEAEC"
                        stroke="#D6D6DA"
                    />
                    ))
                }
            </Geographies>
            <Line
                coordinates={MarkersInfo.map(marker => marker.coordinates)}
                stroke="#ffc875"
                strokeWidth={.5}
            />
            {MarkersInfo.map(({ abbreviation, name, coordinates, xMarkerOffset, yMarkerOffset, image }) => (
                <TravelMapMarker 
                    key={name}
                    name={name} 
                    abbreviation={abbreviation} 
                    coordinates={coordinates} 
                    xMarkerOffset={xMarkerOffset} 
                    yMarkerOffset={yMarkerOffset}
                    image={image}
                    onMarkerClicked={onMarkerClicked} />
            ))}
        </ComposableMap>
    );
}

export default TravelMap;