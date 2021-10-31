import React, {useState, useEffect} from 'react';
import Select from 'react-select';
import './InputDropdown.css';

export const InputDropdown = ({cities, getCity}) => {
  const [ selectedCity, setSelectedCity] = useState({});
  
  //not a good approach and have to use central store for such operation
  //Due to limited time doing this
  useEffect(()=>{
    getCity(selectedCity);
  },[selectedCity]);
  
  const onChangeHandler = (e) =>{
    setSelectedCity(e);
  }

    return(
    <div className="InputDropdown">
        <Select 
          className="select" 
          options={cities} 
          onChange={(e)=>onChangeHandler(e)}
          placeholder="Islamabad"
          />
    </div>
    )
};