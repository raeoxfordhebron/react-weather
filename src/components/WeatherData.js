import React from "react"

function WeatherData({item, index}){
    return (<>
        <p><span>conditions:</span> {item.conditions}</p>
        <p><span>time:</span> {item.time}</p>
        </>
    )
}

export default WeatherData

