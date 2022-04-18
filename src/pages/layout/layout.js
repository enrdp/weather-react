import React from 'react';
import { Outlet, Link } from "react-router-dom";
import UserInput from '../../components/input';

const Layout = (props) => {
    const {setCity, data, fetchWeather, location} = props
  return (
   <div>
      <nav>
        <ul>
          <li>
            <Link to="/src/pages/weather">Home</Link>
          </li>
          <li>
            <Link to="src/pages/forecast">Forecast</Link>
          </li>
          <li>
            <Link to="/src/pages/unsplash">Photos</Link>
          </li>
          <li>
            <Link to="/src/pages/compare">Graphic</Link>
          </li>
        </ul>
      </nav>
        <UserInput setCity={setCity} fetchWeather={fetchWeather} location={location}/>
        
      <Outlet />
      </div>
      
   
  )
};

export default Layout;
