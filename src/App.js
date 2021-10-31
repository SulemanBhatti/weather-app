import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { MainScreen, MapScreen } from './pages';
import { cityData } from './services';
import './App.css';

function App() {
  const [ cities, setCities ] = useState([]);

  //fetch cities data
  useEffect(async()=>{
    const data = await cityData;
    const formattedData = data?.results?.map(i=>{
      return {value: i.name, label:i.name, latitude: i.location.latitude, longitude: i.location.longitude}
    })
    setCities(formattedData);
  },[]);

  return (
    <Router>
    <div className="App">
     <Switch>
          <Route path="/city_map/:latitude/:longitude">
            <MapScreen/>
          </Route>
          <Route exact path="/">
          <MainScreen cities={cities}/>
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
