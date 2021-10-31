import React from 'react';
import { WeatherCard } from '../../components';
import { Header, InputDropdown } from '../../ui-components';

export const MainScreen = () =>{
    return (
        <>
            <Header header={"Weather Forecast for Cities"}/>
            <InputDropdown/>
            <br/>
            <br/>
            <WeatherCard/>
            <p>Line graph for weather(next 1 week)</p>
            <p>Button</p>
        </>
    );
}