import React, {useEffect, useState} from 'react';
import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';
import { withRouter } from "react-router";
import 'mapbox-gl/dist/mapbox-gl.css';
import './CityMap.css';

const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1Ijoic3VsZW1hbi1haG1hZCIsImEiOiJja3ZlNzNuaXY0OWk1MzFscGNvZXZvOWFnIn0.82aTe4nGysydbvetD4hQOw'
  });

const CityMaps = (props) =>{
    const [userCordinates, setUserCordinates] = useState([]);
    const [cityCordinates] =  useState([props.match.params.longitude, props.match.params.latitude]);

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(function(position) {
            setUserCordinates([position.coords.longitude, position.coords.latitude]);
        });
    },[]);
    
    return (
        <div className="CityMap">
        <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
            height: '100vh',
            width: '100vw',
        }}
        center = {props.userLocation === "user" ? userCordinates : cityCordinates}
        zoom = {[11]}
        >
        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
        </Layer>
        <Feature coordinates={props.userLocation === "user" ? userCordinates : cityCordinates} />
        <Marker
            coordinates={props.userLocation === "user" ? userCordinates : cityCordinates}
            anchor="bottom">
            <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png" className="marker" type="image"/>
        </Marker>
        </Map>
        </div>
    )};

    export const CityMap = withRouter(CityMaps);