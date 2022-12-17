import React from "react"
import WeatherForecast from "./WeatherForecast"

function RenderWeather(props){
    return (<>
        <div className="weather-container">
        {props.data.map((item, index) => <WeatherForecast item={item} index={index} key={index}/>
        )}
    </div>
    </>)
}

export default RenderWeather