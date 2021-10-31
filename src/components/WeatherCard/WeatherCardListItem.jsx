import React from 'react';
import { getCurrentDate } from '../../utils';

export const WeatherCardListItem = () =>{
    return (
        <div className="WeatherCardListItem">
           <div className="weatherstyle">
           <img className="WeatherImg" src="/images/cloudy.png" alt="image" />
           <strong className="WeatherCardListing"><h1>25</h1><p>°C</p></strong>
           <strong className="WeatherCardListing"><h4>Feel like Temperature</h4></strong>
           </div>
           <strong>Description</strong>
           <p>{getCurrentDate()}</p>
        </div>
    );
}