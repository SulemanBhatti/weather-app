import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { MainScreen, MapScreen } from './pages';

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
     <Switch>
          <Route path="/city_map">
            <MapScreen />
          </Route>
          <Route path="/">
          <MainScreen/>
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
