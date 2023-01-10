import React, {useState} from "react";
import Weather from "./pages/weather/weather";
import axios from "axios";
import WeatherForecast from "./pages/forecast/weatherForecast";
import UnsplashPhotoFunction from "./pages/unsplash/UnsplashPhoto";
import { useLocation, Routes, Route } from "react-router-dom";
import CallCityComp from "./pages/compare/actionCityCompare";
import Layout from "./pages/layout/layout";


function App(){

const [city, setCity] = useState("")
const [data, setData] = useState("")
const [dataOneCall, setDataOneCall] = useState("")
const [dataP, setDataP] = useState("")
const [status, setStatus] = useState("")
const [status2, setStatus2] = useState("")
const [nameCity, setNameCity] = useState("")
const [nameCity2, setNameCity2] = useState("")
const [cityComp2, setCityComp2] = useState("")
const [country, setCountry] = useState("")
const [country2, setCountry2] = useState("")

const location = useLocation();


const fetchWeather = async (e) => {
    e.preventDefault()
    try {
    let key = "85af1579f962c52499b41e25912beb5b";
    let lang = 'en';
    let units = 'metric';
    
      const response = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&cnt=40&units=${units}&APPID=${key}&lang=${lang}`
      );
      const datas = response.data;
      console.log(response.data)
      setData(response.data);
      fetchWeatherForecast(datas)
      UnsplashPhoto()
}catch (error) {
  console.log('ERROR', error);
}
}

const UnsplashPhoto = async() => {
  try {
    let keyUnsplash = "bpk9afODDxp6-XEZ6-YbgW99xc-5SKaBMG1dX_P6n3g";
    const responseUnsplashPhoto = await axios(`https://api.unsplash.com/search/photos/?client_id=${keyUnsplash}&query=${city}&per_page=10`);
    console.log(responseUnsplashPhoto.data)
    setDataP(responseUnsplashPhoto.data)
  } catch (error) {
    console.log('ERROR', error);
  }
}
const fetchWeatherForecast = async(datas) => {
    try {
    let key = "85af1579f962c52499b41e25912beb5b";
    let lang = 'en';
    let units = 'metric';
    let lat = datas.coord.lat
    let lon = datas.coord.lon
    const responseOneCall = await axios(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=${units}&lang=${lang}`
      );
      console.log(responseOneCall.data)
      setDataOneCall(responseOneCall.data);
    } catch (error) {
      console.log('ERROR', error);
    }
  }

    return(
        <div>
         
        <Routes>
        <Route path="/" element={<Layout data={data} setCity={setCity} fetchWeather={fetchWeather} location={location}/>} >
        <Route path="/" element={<Weather data={data}/>} />
        <Route path="src/pages/forecast" element={<WeatherForecast dataOneCall={dataOneCall} data={data}/>} />
        <Route path="src/pages/unsplash" element={<UnsplashPhotoFunction dataP={dataP}/>} />
        
        <Route path="/src/pages/compare" 
        element={
        <CallCityComp 
        city={city} 
        status={status} 
        status2={status2}
        setStatus={setStatus} 
        setStatus2={setStatus2} 
        nameCity={nameCity} 
        setNameCity={setNameCity}
        nameCity2={nameCity2} 
        setNameCity2={setNameCity2}
        cityComp2={cityComp2}
        setCityComp2={setCityComp2}
        country={country}
        setCountry={setCountry}
        country2={country2}
        setCountry2={setCountry2}
        />} />
        </Route>
        </Routes>
        
       
        </div>
    )

}
export default App
