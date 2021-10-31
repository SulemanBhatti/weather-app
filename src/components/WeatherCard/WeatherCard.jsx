import React from 'react';
import { WeatherCardListItem } from './WeatherCardListItem';
import './WeatherCard.css';

export const WeatherCard = () =>{
    return (
        <section className="wrapper">
        <div className="WeatherCard">
            <WeatherCardListItem/>
        </div>
        </section>
    )
}