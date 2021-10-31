import React, {useState} from 'react';
import { CityMap } from '../../components';
import { Button } from '../../ui-components';
import './MapScreen.css';

export const MapScreen = () =>{
    const [mapLocation, setMapLocation] = useState('');

    const setUserLocation = (param) =>{
        setMapLocation(param);
    }   

    return (
        <div className="MapScreen">
            <CityMap userLocation = {mapLocation}/>
            <Button onClick={()=>setUserLocation('user')} label="Where am I?"/>
        </div>
    );
}