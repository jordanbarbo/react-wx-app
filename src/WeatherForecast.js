import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";
import { ConsoleWriter } from "istanbul-lib-report";

export default function WeatherForecast() {

  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "06e7a1225f8f7ed29a9fd5ba9ca81195";
  let latitude = "40";
  let longitude = "74";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units="metric"`;

  axios.get(apiUrl).then(handleResponse);


  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Mon</div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19°/</span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}