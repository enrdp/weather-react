import React from "react";
import { Link } from "react-router-dom";


const WeatherForecast = (props) => {
const {dataOneCall} = props;

if (!dataOneCall) return null;

  return (
    <div>
      <Link to="/">Weather</Link>
      <Link to="../src/pages/unsplash">Unsplash</Link>

        {
        dataOneCall.daily[0].humidity
        }
    </div>
  );
}

export default WeatherForecast;