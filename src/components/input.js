import React from "react";

function UserInput(props){
    const {setCity, fetchWeather, location} = props
return (
<div>
<form className="form__input" onSubmit={(e)=> [fetchWeather(e)]}>
   <label>
  City:
  
  <input
  type="text"
  onChange={(e) => setCity(e.target.value)}
  required
  />
  </label>

  {location.pathname !== "/src/pages/compare" ? (
  <button onSubmit={(e)=>[fetchWeather(e)]}>Submit</button>
  ) : ("")
  }
  </form>

</div>
    )
}
export default UserInput;