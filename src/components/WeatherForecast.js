import React from "react"


function WeatherForecast({item, index}){
  return (<>
  <div className="weather" key={index}>
    <img src={item.img} alt={item.conditions}/>
    <p><span>conditions:</span> {item.conditions}</p>
    <p><span>time:</span> {item.time}</p>
    </div> 
  </>
    
  )
}

export default WeatherForecast