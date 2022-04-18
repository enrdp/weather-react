import React from "react";


const WeatherForecast = (props) => {
const {dataOneCall} = props;

if (!dataOneCall) return null;

  return (
    <div className="forecast__index">
    
        {
        dataOneCall.daily[0].humidity
        }
    </div>
  );
}

export default WeatherForecast;