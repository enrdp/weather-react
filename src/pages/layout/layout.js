import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import UserInput from '../../components/input';
import "../../asset/navbar.css";


const Layout = (props) => {
    const {setCity, fetchWeather, location} = props;
    const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
   <div>
      <nav className='navigation'>
      <button className="hamburger" 
      onClick={() => {
        setIsNavExpanded(!isNavExpanded);
      }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }>

        <ul className="ul-menu">
          <li className='menu_link'>
            <Link to="/">Home</Link>
          </li>
          <li className='menu_link'>
            <Link to="src/pages/forecast">Forecast</Link>
          </li>
          <li className='menu_link'>
            <Link to="/src/pages/unsplash">Photos</Link>
          </li>
          <li className='menu_link'>
            <Link to="/src/pages/compare">Graphic</Link>
          </li>
        </ul>

        </div>
      </nav>
        <UserInput setCity={setCity} fetchWeather={fetchWeather} location={location}/>
        
      <Outlet />
      </div>
      
   
  )
};

export default Layout;
