import React from "react";

function CompareCity(props){
    const {setCityComp, setCityComp2, getAllData} = props
     
return (
<div>
<form onSubmit={()=> [getAllData()]}>
   <label>
  City 1:
  <input
  type="text"
  onChange={(e) => setCityComp(e.target.value)}
  required
  />
  </label>
  <label>
  City 2
  </label>
  <input
  type="text"
  onChange={(e) => setCityComp2(e.target.value)}
  required
  />
  <button onSubmit={()=>[getAllData()]}>Submit</button></form>
</div>
    )
}
export default CompareCity;