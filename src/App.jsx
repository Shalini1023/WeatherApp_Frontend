
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Current from "./Components/Current";
import Forecast from "./Components/Forecast";
import '../node_modules/bootstrap/dist/js/bootstrap';

export default function App(){
  const [city, setCity] = useState();
  const [clickedCity, setClickedCity] = useState();
  const [citySuggestion, setCitySuggestion] = useState([]);
  const [currentWeather, setCurrent] = useState();
  const [forecastWeather, setforecast] = useState();
  const [location, setLocation] = useState();
  const [isDay, setIsDay] = useState(true); // Initial mode is day
  const [weather1, setWeather1] = useState('sunny'); // Initial weather
  

  const autoCompURL = "https://api.weatherapi.com/v1/search.json?key=de70013c9fdb4757a4325802242510&q=";
  const weatherURL = (city)=>`https://api.weatherapi.com/v1/forecast.json?key=83c0b17cb2774eac95723527231501&q=${city}&days=7&aqi=no&alerts=no`;
  useEffect(()=>{
    if(city && city.length > 3){
      fetchAutoComAPI();
    }
  },[city]);

  const fetchAutoComAPI = async()=>{
    try{
      const response = await axios.get(autoCompURL + city);
      const resp = response.data;
      console.log("api call", resp);
      const cityData = resp.map((data)=>{
        return `${data.name}, ${data.region}, ${data.country}`
      });
      setCitySuggestion(cityData);
    }catch(e){
      console.log('error', e)
    }
  }

  const handleRemoveFields = () => { 
    const values = [...clickedCity]; 
    values.splice(1);   
     setClickedCity(values); 
    };


useEffect(() => {
    // Simulate fetching weather data and time
    const fetchWeatherAndTime = async () => {
      const weatherData = await new Promise((resolve) =>
        setTimeout(() => resolve('rainy'), 1000)
      );
      const currentTime = new Date().getHours();
      setIsDay(currentTime >= 6 && currentTime < 18); // Day mode between 6 AM and 6 PM
      setWeather1(weatherData);     
    };

    fetchWeatherAndTime();
  }, []);

  const handleSelectedCity = (city)=>{
    console.log('clicked city',city);
    setClickedCity(city)
    fetchweatherAPI(city);
    setCitySuggestion([]);
    };
   
  
  const fetchweatherAPI =async(city) =>{
    try{
      const response =await axios.get(weatherURL(city));
      const resp =response.data;
      //console.log(resp);
      setCurrent(resp.current);
      setforecast(resp.forecast);
      setLocation(resp.location);
      console.log('Current',resp.current);
      console.log('Forecast',resp.forecast);
      console.log('Location',resp.location);
    }
    catch(e){
      console.log('error',e);
    }
  }
  return(
    <>

    <div className={isDay ? 'day-mode' : 'night-mode'}>
        <p className="fs-2 p-3 mt-2 text-start" id="animation">{isDay ? 'Day mode' : 'Night mode'}</p>

    <div className="container p-5 rounded mt-5" style={{ backgroundImage: 'url(https://t3.ftcdn.net/jpg/09/63/20/10/360_F_963201035_IpEX84fk82nWgZl8NSFEqrbH9srYqdZ4.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', width: '100vw', backgroundColor: 'transparent' }}>
      <h1 id="animation" className="p-3 text-center"><a href="https://www.weatherapi.com/" title="Free Weather API"><img style={{minHeight: '15vh', width: '13vw'}} src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com" border="0" /></a><span className="text-center m-4">WeatherFlow Discover Your Climate!</span></h1>
<div className="d-flex">
      <input type="text" 
      value= {clickedCity}
      className="form-control"
       placeholder="Search city..." 
       onChange={(e)=>{setCity(e.target.value)
      if (e.target.value===""){
        setCurrent();
        setforecast();
        setLocation();
        setClickedCity();
      }

      }} />
<button 
  className="btn btn-primary mt-2 btn-lg" 
  type="button"
  style={{ 
    padding: '10px 22px', 
    marginLeft: '30px' 
  }} 
  onClick={() => handleRemoveFields()}
>
  Refresh
</button>


</div>

      {citySuggestion && citySuggestion.map((data, index)=>{
        return (<div key={index} className="text-center  fs-4 bg-info  rounded p-2 bg-opacity-10 border-info border-opacity-25 text-black" style={{cursor:'pointer'}} onClick={()=>handleSelectedCity(data)}>
          {data}
        
        </div>
        
        );
      })}  
      {currentWeather && <Current currentWeather = {currentWeather} location={location} />}
            
       {forecastWeather && <Forecast forecastWeather = {forecastWeather} location = {location} />}
    
    
     </div>
    </div>
    </>
  );
}



