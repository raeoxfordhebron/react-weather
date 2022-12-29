import React from "react"

function WeatherIcon({item, index}){
    return (<>
         <img src={item.img} alt={item.conditions}/>
        </>
    )
}

export default WeatherIcon