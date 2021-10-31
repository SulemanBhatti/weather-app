import React from 'react';
import { WeatherCard, WeatherLineGraph } from '../../components';
import { Header, InputDropdown, Button } from '../../ui-components';

export const MainScreen = () =>{
    return (
        <>
            <Header header={"Weather Forecast for Cities"}/>
            <InputDropdown/>
            <br/>
            <WeatherCard/>
            <br/>
            <WeatherLineGraph/>
            <br/>
           <Button/>
        </>
    );
}