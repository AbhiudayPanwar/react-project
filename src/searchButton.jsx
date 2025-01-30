import "./search.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import { colors } from "@mui/material";

export default function Search({updateWeather}){

    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    const API_KEY='16ceccae7b72e7f94c70345f8e68ff7d';
    const API_URL='https://api.openweathermap.org/data/2.5/weather';
   
        let getWeather= async()=>{
            try{
            let result= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
           
            let jsonResult = await result.json();
            let weatherInfo={
               city:city,
               temp:jsonResult.main.temp,
               minTemp:jsonResult.main.temp_min,
               maxTemp:jsonResult.main.temp_max,
               humidity:jsonResult.main.humidity,
               feelslike:jsonResult.main.feels_like,
               description:jsonResult.weather[0].description,
            };
            updateWeather(weatherInfo);
            console.log(weatherInfo);
        }
        catch(err){
            setError(true);
        }
       }
   
    
    let updateCity=(event)=>{
        setCity(event.target.value);
    }
    let submittion = (event)=>{
        event.preventDefault();
        console.log(city);
        setCity('');
        getWeather();
        
    }
    return (
        <div className="search-bar">
         <form >
         <TextField id="outlined-basic" label="City name" variant="outlined" required value={city} onChange={updateCity}/>
         <br /><br />
         <Button variant="contained" endIcon={<SendIcon />} onClick={submittion} >
           Search
         </Button>
         </form>
         {error && <p style={{color:"red"}}>No data available</p>}
        </div>
    );
}