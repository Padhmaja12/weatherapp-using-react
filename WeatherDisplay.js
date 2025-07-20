import React from "react";
import "./WeatherDisplay.css";

function WeatherDisplay({ weather }){
    let weatherIconSrc = '';
    const weatherCondition = weather.weather[0].main.toLowerCase();

    if (weatherCondition.includes('cloud')){
        weatherIconSrc = '/images/cloud.png'
    }else if (weatherCondition.includes('clear')){
        weatherIconSrc = '/images/clear.png'
    }else if (weatherCondition.includes('rain')){
        weatherIconSrc = '/images/rain.png'
    }else if (weatherCondition.includes('mist')){
        weatherIconSrc = '/images/mist.png'
    }else if (weatherCondition.includes('snow')){
        weatherIconSrc = '/images/snow.png'
    }else if (weatherCondition.includes('drizzle')){
        weatherIconSrc = '/images/drizzle.png'
    }else{
        weatherIconSrc = '/images/default.png';
    }

    return(
        <div className="weather">
            <img 
            src={weatherIconSrc} 
            className="weather-icon"
             alt={weather.weather[0].description}
             />
            <h1 className="temp">{Math.round(weather.main.temp)}°C</h1>
            <h2 className="city">{weather.name}</h2>
            {/* <div>
                <img src="/images/humidity.png"/ >
                <p>{weather.main.humidity}</p>
            </div> */}
           <div className="weather-details">
            <p>💧<strong>Humidity:</strong>  {weather.main.humidity}%</p>
            <p>💨<strong> Wind Speed:</strong> {weather.wind.speed} m/s</p>
            <p>🌍<strong> Latitude:</strong> {weather.coord.lat}</p>
            <p>🌍<strong>Longitude:</strong>  {weather.coord.lon}</p>
            <p>🌤️<strong> Condition:</strong> {weather.weather[0].description}</p>
          </div>
        </div>
    );
}

export default WeatherDisplay;