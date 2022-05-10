import React from "react";
import "./../asset/input.css";

function UserInput(props){
    const {setCity, fetchWeather, location} = props
return (

<div className="form-container form-container-margin">
<form className="form-group" onSubmit={(e)=> [fetchWeather(e)]}>
<span>City 1</span>
  <input
  type="text"
  className="form-field" 
  onChange={(e) => setCity(e.target.value)}
  placeholder="Insert City"
  required
  />
  

  {location.pathname !== "/src/pages/compare" ? (
  <button onSubmit={(e)=>[fetchWeather(e)]}>Submit</button>
  ) : ("")
  }
  </form>

</div>
    )
}
export default UserInput;