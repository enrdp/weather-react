import React, { useState } from "react";
import "../../asset/weatherForecast.css"

const WeatherForecast = (props) => {
const {dataOneCall, data} = props;
const [flip, setFlip] = useState([])

const flipCard = (i) => {
    if (flip.indexOf(i) === -1) {
      setFlip([...flip, i]);
    }else{
      var filteredArray = flip.filter(function(e) { return e !== i })
    setFlip(filteredArray)
        }
  };


  if (!dataOneCall) return null;

  return (
    <div className="forecast__index">
    
        {dataOneCall.daily.map((datas, i)=>{
          if (i < 6 && i !== 0) {
          return (
            <div key={i} className={`card ${flip.indexOf(i) !== -1 ? 'flip' : ''}`} onClick={()=> flipCard(i)}>

            <div className={`front ${i}`}>
              <h5>{(new Date(datas.dt * 1000).toDateString())}</h5>   
              
              <h2>{data.name} - {data.sys.country}</h2>
              <img
                  src={"http://openweathermap.org/img/wn/" +
                  datas.weather[0].icon +
                  "@4x.png"}
                  className="card-img-top"
                  alt={datas.weather[0].description}
                />   
                <h3 className="card-title">{datas.weather[0].main}</h3>     
                <p className="card-text"><b>High:</b> {datas.temp.max}&deg;C</p>
                  <p className="card-text"><b>Low:</b> {datas.temp.min}&deg;C</p>  
            </div>

              <div className={`back ${i}`}>

              <p class="card-text"><b>High Feels like: </b>{
                    datas.feels_like.day
                  }&deg;C</p>
                  <p className="card-text"><b>Pressure:</b> {datas.pressure}mb</p>
                  <p className="card-text"><b>Humidity:</b> {datas.humidity}%</p>
                  <p className="card-text"><b>UV Index:</b> {datas.uvi}</p>
                  <p className="card-text"><b>Precipitation:</b> {datas.pop * 100}%</p>
                  <p className="card-text"><b>Dewpoint:</b> {datas.dew_point}</p>
                  <p className="card-text"><b>Wind:</b> {datas.wind_speed}m/s, {
            datas.wind_deg
          }&deg;</p>
                  <p className="card-text"><b>Sunrise:</b> <i>{new Date(datas.sunrise * 1000).toTimeString()}</i></p>
                  <p className="card-text"><b>Sunset:</b> <i>{new Date(datas.sunset * 1000).toTimeString()}</i></p>
                  </div>
            </div>  
          )
          }
          return null;
        })}
        
        
    </div>
  );
}

export default WeatherForecast;