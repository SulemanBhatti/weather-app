import React from 'react';
import { getCurrentDate } from '../../utils';

export const WeatherCardListItem = () =>{
    return (
        <div className="WeatherCardListItem">
           <div className="WeatherTempLayout">
           <img className="WeatherImg" src="/images/cloudy.png" alt="image" />
           <strong className="WeatherCardListing"><h1>25</h1><p>°C</p></strong>
           <p className="WeatherCardListing"><h4>| Feel like Temperature</h4></p>
           </div>
           <p>Description</p>
           <p>Date: {getCurrentDate()}</p>
        </div>
    );
}