import React from "react";

function CompareCity(props){
    const { setCityComp2, handleSubmit, cityComp2 } = props
    
return (

<div className="form-container">
<form className="form-group" onSubmit={handleSubmit}>

<span>City 2</span>
  <input
  type="text"
  className="form-field" 
  value={cityComp2}
  placeholder="Insert City"
  onChange={(e) => {setCityComp2(e.target.value)}}
  required
  />

  <button onSubmit={handleSubmit}>Submit</button>
  </form>

</div>
    )
}
export default CompareCity;