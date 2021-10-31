import React from 'react';

export const WeatherCardListItem = (props) =>{
    return (
        <div className="WeatherCardListItem">
           <div className="WeatherTempLayout">
           <img className="WeatherImg" src={props.icon} alt="image" />
           <strong className="WeatherCardListing"><h1>{props.celsius}</h1><p>°C</p></strong>
           <p className="WeatherCardListing"><h4>| Feel Like: {props.feelsLike}°C</h4></p>
           </div>
           <p>{props.description}</p>
           <p>Date: {props.date}</p>
        </div>
    );
}