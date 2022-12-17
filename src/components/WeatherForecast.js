import React from "react"


function WeatherForecast({item, index}){
  return (<>
  <div className="weather" key={index}>
    <img src={item.img} alt={item.conditions}/>
    <h2>{item.conditions}</h2>
    <h3>{item.time}</h3>
    </div> 
  </>
    
  )
}

export default WeatherForecast