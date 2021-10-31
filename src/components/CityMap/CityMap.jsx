import React, {useEffect, useState} from 'react';
import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './CityMap.css';

const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1Ijoic3VsZW1hbi1haG1hZCIsImEiOiJja3ZlNzNuaXY0OWk1MzFscGNvZXZvOWFnIn0.82aTe4nGysydbvetD4hQOw'
  });

export const CityMap = (props) =>{
    const [userCordinates, setUserCordinates] = useState([]);
    const [cityCordinates, setCityCordinates] = useState({
        lat: '',
        long: ''
    });

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(function(position) {
            setUserCordinates([position.coords.longitude, position.coords.latitude]);
        });
    },[]);
    
    // setCityCordinates({lat: position.coords.latitude, long: position.coords.longitude});
    console.log("DATA-1",userCordinates);
    return (
        <div className="CityMap">
        <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
            height: '100vh',
            width: '100vw',
        }}
        center = {props.location === "user" ? userCordinates : [72.984138, 33.738045]}
        zoom = {[11]}
        >
        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
        </Layer>
        <Feature coordinates={props.location === "user" ? userCordinates : [72.984138, 33.738045]} />
        <Marker
            coordinates={props.location === "user" ? userCordinates : [72.984138, 33.738045]}
            anchor="bottom">
            <img src='/images/mapbox-icon.png' className="marker"/>
        </Marker>
        </Map>
        </div>
    )}