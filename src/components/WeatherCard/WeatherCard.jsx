import React from 'react';
import { WeatherCardListItem } from './WeatherCardListItem';
import './WeatherCard.css';

export const WeatherCard = ({weatherForecast}) =>{

    return (
        <section className="wrapper">
        <div className="WeatherCard">
            {weatherForecast?.map((i, key)=>{
            return <WeatherCardListItem 
                key = {key}
                celsius={i.day.avgtemp_c || '---'} 
                feelsLike={i.hour[0]?.feelslike_c || '---'} 
                icon={i.day.condition.icon || '---'}
                date = {i.date || '---'}
                description= {i.day.condition.text || '---'}
            />
             })}
        </div>
        </section>
    )
}