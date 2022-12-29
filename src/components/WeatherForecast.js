import React from "react"


function WeatherForecast({item, index}){
  return (<>
  <div className="weather"/>
    <img src={item.img} alt={item.conditions}/>
  </>
    
  )
}

export default WeatherForecast