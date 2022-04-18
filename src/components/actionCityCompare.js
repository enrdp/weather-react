import React, { useEffect, useState } from 'react'
import axios from 'axios';
import WeatherGraph from './graph';
import CompareCity from './compareCity';

const CallCityComp = () => {
    const [cityComp, setCityComp] = useState("")
    const [cityComp2, setCityComp2] = useState("")
    const [nameCity, setNameCity] = useState("")
    const [nameCity2, setNameCity2] = useState("")

    
    let key = "85af1579f962c52499b41e25912beb5b";
    let lang = 'en';
    let units = 'metric';
    let URLs= [

    `https://api.openweathermap.org/data/2.5/forecast?q=${cityComp}&cnt=40&units=${units}&APPID=${key}&lang=${lang}`,
    `https://api.openweathermap.org/data/2.5/forecast?q=${cityComp2}&cnt=40&units=${units}&APPID=${key}&lang=${lang}`
]


    
 const getAllData = async (URLs) => {
   
  return await Promise.all(URLs.map(fetchData));
}

const fetchData = async(URL) => {
    
  return await axios
    .get(URL)
    .then(function(response) {
      return {
        success: true,
        data: response.data
      };
    })
    .catch(function(error) {
      return { success: false };
    });
}
function handleSubmit(e) {
    e.preventDefault();
    if(cityComp || cityComp2){
        setCityComp("")
        setCityComp2("")
    }
    getAllData(URLs)
    .then(resp=>{
        setCityComp(resp[0].data.list[0].main.temp)
        setCityComp2(resp[1].data.list[0].main.temp)
        setNameCity(resp[0].data.city.name)
        setNameCity2(resp[1].data.city.name)
        
    })
    .catch(e=>{
        console.log(e)
    })
    
  }



return (
<div>
<form onSubmit={handleSubmit}>
   <label>
  City 1:
  <input
  type="text"
  onChange={(e) => {setCityComp(e.target.value)}}
  required
  />
  </label>
  <label>
  City 2
  </label>
  <input
  type="text"
  onChange={(e) => {setCityComp2(e.target.value)}}
  required
  />

  <button onSubmit={handleSubmit}>Submit</button></form>
<WeatherGraph 
cityComp={cityComp} 
cityComp2={cityComp2}
nameCity={nameCity}
nameCity2={nameCity2}
/>
</div>
)
}

export default CallCityComp;
