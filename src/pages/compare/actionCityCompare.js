import React from 'react'
import axios from 'axios';
import WeatherGraph from '../../components/graph';
import CompareCity from '../../components/compareCity';

const CallCityComp = (props) => {

  const { 
    city, 
    setStatus, status,
    setStatus2, status2,
    nameCity, setNameCity,
    nameCity2,setNameCity2,
    cityComp2, setCityComp2,
    country, setCountry,
    country2, setCountry2
  } = props

    let key = "85af1579f962c52499b41e25912beb5b";
    let lang = 'en';
    let units = 'metric';
    let URLs= [

    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=40&units=${units}&APPID=${key}&lang=${lang}`,
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

    getAllData(URLs)
    .then(resp=>{
      console.log(resp)
      setStatus(resp[0].data.list[0].main.temp)
      setStatus2(resp[1].data.list[0].main.temp)
      setNameCity(resp[0].data.city.name)
      setNameCity2(resp[1].data.city.name)
      setCountry(resp[0].data.city.country)
      setCountry2(resp[1].data.city.country)
    })
    .catch(e=>{
        console.log(e)
    })
    
  }


return (
<div className='cityCompare__index'>

<CompareCity 
handleSubmit={handleSubmit}
setCityComp2={setCityComp2}
cityComp2={cityComp2}
/>
<WeatherGraph 
status={status} 
status2={status2}
nameCity={nameCity}
nameCity2={nameCity2}
country={country}
country2={country2}
/>
</div>
)
}

export default CallCityComp;
