import React, { useState, useEffect } from 'react';
import { WeatherCard, WeatherLineGraph } from '../../components';
import { Header, InputDropdown, Button } from '../../ui-components';
import { getWeatherForecast } from '../../services';

export const MainScreen = ({cities}) =>{
    const [ selectedCity, setSelectedCity] = useState({});
    const [ weatherForecast, setWeatherForecast ] = useState([]);

    useEffect(()=>{
        // Set Initial State to Capital City of Pakistan, Islamabad
        setSelectedCity({ latitude: 24.69904, longitude: 70.17982, value: 'Islamabad', label: 'Islamabad'})
    },[]);

    useEffect(async()=>{
        const data = await getWeatherForecast(selectedCity);
        setWeatherForecast(data?.forecast?.forecastday);
    },[selectedCity]);
    
    const getCity = (city) =>{
        setSelectedCity(city);
    }
    
    return (
        <>
            <Header header={"Weather Forecast for Cities"}/>
            <InputDropdown cities={cities} getCity={getCity}/>
            <br/>
            <WeatherCard weatherForecast = {weatherForecast}/>
            <br/>
            <WeatherLineGraph weatherForecast = {weatherForecast}/>
            <br/>
            <br/>
           <Button link={`/city_map/${selectedCity.latitude}/${selectedCity.longitude}`} label="View city on map" />
        </>
    );
}
