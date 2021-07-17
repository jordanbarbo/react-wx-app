import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
    <div clasName="WeatherInfo">
        
          <div className="row">
            <span className="col-7">
            <h1>{props.data.city}</h1>
            <ul>
              <li> <FormattedDate date={props.data.date} /> </li>
              <li className="text-capitalize">{props.data.description}</li>              
            </ul>  
            </span>
            <span className="col-5">
              <WeatherIcon code={props.data.icon} size={100} />
            </span>


          </div>
          <div className="row">
            <div className="col-7">
              <WeatherTemperature celsius={props.data.temperature} /> 
            </div>
            <div className="col-5">
              <ul>
                <li>Wind: {Math.round(props.data.wind)} km/hr </li>
                <li>Humidity: {props.data.humidity}% </li>
              </ul>         
            </div>
          </div>
    </div>    
    );

}