import React from "react";
import FormattedDate from "./FormattedDate";

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
                <span className="temperature">{Math.round(props.data.temperature)}</span>
                <span className="units">
                  °C | °F
                </span>  
              </div>
            </div>
            <div className="col-5">
              <ul>
                <li>
                    <img 
                      src={props.data.iconUrl}
                      alt="Clear"
                    />
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