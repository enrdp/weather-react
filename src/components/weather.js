import React from "react";
import { Link } from "react-router-dom";


const Weather = (props) => {
const {data} = props;

if (!data) return null;

  return (
    <div>
        {data.name}
        
        <Link to="src/pages/forecast">Forecast</Link>
        <Link to="src/pages/unsplash">Unsplash</Link>
    </div>
  );
}

export default Weather;