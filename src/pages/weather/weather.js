import React from "react";
import '../../asset/weather.css'

const Weather = (props) => {
const {data} = props;

if (!data) return null;

let dt = new Date(data.dt * 1000); //timestamp * 1000

  return (
    <div className="weather__index">

<div className="col weather_day">
      
              <div className="card__weather" id="card">
              <h5 className="card-title-weather">{dt.toDateString()}</h5>
              
              <div className="figure">
              
                <img
                  src={`http://openweathermap.org/img/wn/${
                    data.weather[0].icon
                  }@4x.png`}
                  className="card-img-top"
                  alt={data.weather[0].description}
                />
                </div>
                <div className="card-body">
                <h2 className="card-title">{data.name} - {data.sys.country}</h2>
                  <h3 className="card-title">{data.weather[0].main}</h3>
                  <p className="card-text"><b>Temperature:</b> {data.main.temp}&deg;C</p>
                  <p className="card-text"><b>High:</b> {data.main.temp_max}&deg;C - <b>Low:</b> {
                    data.main.temp_min
          }&deg;C</p>
                  <p className="card-text"><b>High Feels like:</b> {
                    data.main.feels_like
                  }&deg;C</p>
                  <p className="card-text"><b>Pressure:</b> {data.main.pressure}mb</p>
                  <p className="card-text"><b>Humidity:</b> {data.main.humidity}%</p>
                  <p className="card-text"><b>Wind:</b> {data.wind.speed}m/s, {
                    data.wind.deg
          }&deg;</p>
                  
                </div>
              </div>
            </div>
          </div>

    
  );
}

export default Weather;