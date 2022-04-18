import React from "react";

function CompareCity(props){
    const { setCityComp2, handleSubmit, cityComp2 } = props
    
return (
<div>
<form onSubmit={handleSubmit}>

  <label>
  City 2
  </label>
  <input
  type="text"
  value={cityComp2}
  onChange={(e) => {setCityComp2(e.target.value)}}
  required
  />

  <button onSubmit={handleSubmit}>Submit</button>
  </form>
</div>
    )
}
export default CompareCity;