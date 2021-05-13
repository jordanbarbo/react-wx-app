import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";



export default function Weather() {
  const [weatherData, setWeatherData] = useState( {ready: false} );

  function handleResponse(response){
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      maxTemp: response.data.main.temp_max,
      minTemp: response.data.main.temp_min
    })
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <form>
          <div className="row">
            <div className="col-9"> 
              <input 
                type="search" 
                placeholder="Enter a City..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input 
                type="submit"
                value="Search"
                className="btn btn-dark"
              />
            </div>  
          </div>
        </form>
        <h1>{weatherData.city}</h1>
          <div className="row">
            <div className="col-7">
              <ul>
                <li>Saturday 21:12</li>
                <li className="text-capitalize">{weatherData.description}</li>
              </ul>
              <div>
                <span className="temperature">{Math.round(weatherData.temperature)}</span>
                <span className="units">
                  °C | °F
                </span>  
              </div>
            </div>
            <div className="col-5">
              <ul>
                <li>{Math.round(weatherData.maxTemp)} / {Math.round(weatherData.minTemp)}</li>
                <li>Wind: {Math.round(weatherData.wind)} km/hr </li>
                <li>Humidity: {weatherData.humidity}% </li>
              </ul>         
            </div>
          </div>
        </div>
      </div>
    );
  } else {

  let apiKey = "06e7a1225f8f7ed29a9fd5ba9ca81195";
  let city = "London";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading...";
  }
}   