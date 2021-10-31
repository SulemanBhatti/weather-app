import React, { useEffect, useState } from 'react';
import {Line} from 'react-chartjs-2';
import './WeatherLineGraph.css';

export const WeatherLineGraph = ({weatherForecast}) => {

    const [ state, setState ] = useState({
      labels: ['1', '2', '3',
    '4', '5'],
    datasets: [
     {
     label: 'Weekly Weather Forecast',
     fill: false,
     lineTension: 0.5,
     backgroundColor: 'rgba(75,192,192,1)',
     borderColor: 'rgba(0,0,0,1)',
     borderWidth: 2,
     data: [0, 0, 0, 0, 0]
    }]
  });

    useEffect(()=>{
      const labels = weatherForecast?.map(i=>i.date);
      const data = weatherForecast?.map(i=>i.day.avgtemp_c);
      setState({
      labels: labels,
      datasets: [
       {
       label: 'Weekly Weather Forecast',
       fill: false,
       lineTension: 0.5,
       backgroundColor: 'rgba(75,192,192,1)',
       borderColor: 'rgba(0,0,0,1)',
       borderWidth: 2,
       data: data
      }]
    })
      
    },[weatherForecast]);


    return (
      <div className="WeatherLineGraph">
        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
