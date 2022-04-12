import React from "react";
import GoogleMapReact from 'google-map-react';

const Map = ({center, zoom, children}) => {
    return(
        <div style={{ position: 'relative', height: '100vh', width: '500px' }} className='Map-container'>
            <GoogleMapReact
                bootstrapURLKeys={{key: process.env.REACT_APP_MAP_KEY}}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {children}
            </GoogleMapReact>
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 37.7749,
        lng: -122.4194
    },
    zoom: 11
}

export default Map;