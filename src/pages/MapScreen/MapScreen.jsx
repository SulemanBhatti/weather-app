import React from 'react';
import { CityMap } from '../../components';
import { Button } from '../../ui-components';
import './MapScreen.css';

export const MapScreen = () =>{
    return (
        <div className="MapScreen">
            <Button label="Where am I?"/>
            <CityMap />
        </div>
    );
}