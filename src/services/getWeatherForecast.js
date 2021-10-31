export const getWeatherForecast = async(city)=>{
    const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=fb24143f0b094065849152703213110&q=${city.value ? city.value : 'Islamabad'}&aqi=no&days=7&hour=0`
      );
      const data = await response.json(); // Here you have the data that you need
      return data;
}

