import React from "react";

function UserInput(props){
    const {setCity, fetchWeather} = props
     
return (
<div>
<form onSubmit={(e)=> [fetchWeather(e)]}>
   <label>
  City:
  
  <input
  type="text"
  onChange={(e) => setCity(e.target.value)}
  required
  />
  </label>
  <button onSubmit={(e)=>[fetchWeather(e)]}>Submit</button></form>
  <nav className="navigation">
  
  </nav>
</div>
    )
}
export default UserInput;