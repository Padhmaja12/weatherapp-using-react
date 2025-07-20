import React, {useState} from "react";
import './App.css';
import SearchBar from "./components/SearchBar";
import Header from './components/Header';
import Footer from './components/Footer';
import WeatherDisplay from "./components/WeatherDisplay"

function App(){
  const API_KEY = "ded4f41f97e92a9fd4e6b63db6f97750";
  const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?&q=";

  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const checkWeather = async (city) => {
    setError('');
    try{
     // Step 1: Use Geocoding API to get lat/lon
    const geoRes = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
    );
    const geoData = await geoRes.json();

    if (geoData.length === 0) {
      setError(`Could not find location "${city}". Try another place.`);
      setWeatherData(null);
      return;
    }

    const { lat, lon, name } = geoData[0];

    // Step 2: Use lat/lon to get weather
    const weatherRes = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );

    if (!weatherRes.ok) {
      setError('Weather data not found. Try again later.');
      setWeatherData(null);
      return;
    }

    const weather = await weatherRes.json();
    setWeatherData(weather);  
    }catch(err){
      console.error("Fetch error", err);
      setError('Failed to fetch weather data. Check your internet connection! Try again later');
      setWeatherData(null);
    }
  };

  return(
   <div className="app-container">
      <Header/>
      <div className="content">
      <SearchBar onSearch={checkWeather}/>
      {error && <p className="error-message">{error}</p>}
      {weatherData && <WeatherDisplay weather={weatherData}/>}
      </div>
      <Footer/>
      </div>
  );

}

export default App;