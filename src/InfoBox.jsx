import "./infobox.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({weather}){

    let RAIN_URL="https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let HOT_URL="https://images.unsplash.com/photo-1470526446583-d0fe2363d8cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let COLD_URL="https://images.unsplash.com/photo-1483536999439-9c9c911cc1a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    return (
        <div className="InfoBox">
        <h3>Weather is {weather.description}</h3>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={weather.humidity>80 ? RAIN_URL  : weather.temp>25 ? HOT_URL : COLD_URL }
        title="green iguana"
      />
      <CardContent>
        <h2>Temprature : {weather.temp}</h2>
        <Typography gutterBottom variant="h5" component="div">
          {weather.city} {weather.humidity>80 ? <AcUnitIcon/>  : weather.temp>25 ? <WbSunnyOutlinedIcon/> : <ThunderstormIcon/> }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Feels like  <i>{weather.feelslike}</i></p>
          <p>Max Temp : {weather.maxTemp}</p>
          <p>Min Temp : {weather.minTemp}</p>
          <p>Humidity : {weather.humidity}</p>
        </Typography>
      </CardContent>
      
    </Card>
        </div>
    );
}