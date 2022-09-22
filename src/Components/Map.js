import React from 'react';
import { GoogleMap, useLoadScript, Maker} from '@react-google-maps/api';
import './map.css'

  function Location(){

    const {isLoaded} = useLoadScript({
        googleMapApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
    });
        if (!isLoaded) return <div>Loading...</div>
        
        const Map = () => {
            <GoogleMap zoom = {10} center = 
            {{lat:29.99627128194928, lng:31.140408444167807}}
            className= 'google-map'>
    
            </GoogleMap>
        }
    return(
        <div>
        <Map />
    </div>
        )
};

// this component has failed to render because the API key isn't valid
// because of that i used the google map Iframe..!




export default Location;


