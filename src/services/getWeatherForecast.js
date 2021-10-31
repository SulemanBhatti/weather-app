export const getWeatherForecast = async(city)=>{

    // Forecast API is only giving data for 3 days so, to display functionality I used history to fetch 7 days weather data
    //Here is the endpoint for Forecast API you can test it is only giving 3 days forecast
    //http://api.weatherapi.com/v1/forecast.json?key=fb24143f0b094065849152703213110&q=Karachi&days=7&hour=0
    
    const response = await fetch(
        `https://api.weatherapi.com/v1/history.json?key=fb24143f0b094065849152703213110&q=${city.value ? city.value : 'Islamabad'}&aqi=no&dt=2021-10-25&end_dt=2021-10-31&hour=0`
      );
      const data = await response.json(); // Here you have the data that you need
      return data;
}

