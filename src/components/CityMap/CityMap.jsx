import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './CityMap.css';

const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1Ijoic3VsZW1hbi1haG1hZCIsImEiOiJja3ZlNzNuaXY0OWk1MzFscGNvZXZvOWFnIn0.82aTe4nGysydbvetD4hQOw'
  });

export const CityMap = () =>{
    return (
        <div className="CityMap">
        <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
            height: '100vh',
            width: '100vw',
        }}>
        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
            <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
        </Layer>
        </Map>
        </div>
    )}