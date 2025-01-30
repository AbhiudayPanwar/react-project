import { useState } from 'react';
import Search from './searchButton';
import InfoBox from './InfoBox'
export default function WeatherApp(){
    let [weather,setWeather]=useState({
        city:"Delhi",
        description: "broken clouds",
        feelslike: "windy", 
        humidity: 37,
        maxTemp: 17.07,
        minTemp: 17.07,
        temp: 17.07,
  });
    let updateWeather=(weatherInfo)=>{
        setWeather(weatherInfo);
    }
    return (
        <div className="WeatherApp">
            <h3>Search For Weather </h3>
           <Search updateWeather={updateWeather}/>
           <InfoBox weather={weather}/>
        </div>
    );
}