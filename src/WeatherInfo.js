import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
    <div clasName="WeatherInfo">
        <h1>{props.data.city}</h1>
          <div className="row">
            <div className="col-7">
              <ul>
                <li>
                  <FormattedDate date={props.data.date} />
                  </li>
                <li className="text-capitalize">{props.data.description}</li>
              </ul>
              <div>
                <WeatherTemperature celsius={props.data.temperature} /> 
              </div>
            </div>
            <div className="col-5">
              <ul>
                <li>
                  <WeatherIcon code={props.data.icon} />
                </li>
                <li>{Math.round(props.data.maxTemp)} / {Math.round(props.data.minTemp)}</li>
                <li>Wind: {Math.round(props.data.wind)} km/hr </li>
                <li>Humidity: {props.data.humidity}% </li>
              </ul>         
            </div>
          </div>
    </div>    
    );

}