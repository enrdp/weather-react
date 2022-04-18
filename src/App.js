import React, {useState} from "react";
import UserInput from "./components/input";
import Weather from "./components/weather";
import axios from "axios";
import WeatherForecast from "./pages/forecast/weatherForecast";
import UnsplashPhotoFunction from "./pages/unsplash/UnsplashPhoto";
import { Routes, Route } from "react-router-dom";
import  WeatherGraph  from "./components/graph";
import CallCityComp from "./components/actionCityCompare";

function App(){

const [city, setCity] = useState("")
const [data, setData] = useState("")
const [dataOneCall, setDataOneCall] = useState("")
const [dataP, setDataP] = useState("")



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
    const responseUnsplashPhoto = await axios(`https://api.unsplash.com/search/photos/?client_id=${keyUnsplash}&query=${city}`);
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
        `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=${units}&lang=${lang}`
      );
      console.log(responseOneCall.data)
      setDataOneCall(responseOneCall.data);
    } catch (error) {
      console.log('ERROR', error);
    }
  }

    return(
        <div>
        <UserInput setCity={setCity} fetchWeather={fetchWeather}/>
        
        <CallCityComp />
        <Routes>
        <Route path="/" element={<Weather data={data}/>} />
        <Route path="src/pages/forecast" element={<WeatherForecast dataOneCall={dataOneCall} />} />
        <Route path="src/pages/unsplash" element={<UnsplashPhotoFunction dataP={dataP}/>} />
        </Routes>
        </div>
    )

}
export default App