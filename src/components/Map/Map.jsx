import React from "react";
import GoogleMapReact from 'google-map-react';

const Map = ({center, zoom}) => {
    return(
        <div style={{ position: 'relative', height: '100vh', width: '500px' }} className='Map-container'>
            <GoogleMapReact
                bootstrapURLKeys={{key: process.env.REACT_APP_MAP_KEY}}
                defaultCenter={center}
                defaultZoom={zoom}
            ></GoogleMapReact>
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

export default Map;