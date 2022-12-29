import React from "react"
import WeatherIcon from "./WeatherIcon"
import WeatherData from "./WeatherData"


function WeatherForecast(props){
  return (<>
  <div className="weather">
    <WeatherIcon {...props}/>
    <WeatherData {...props}/>
    </div> 
  </>
    
  )
}

export default WeatherForecast