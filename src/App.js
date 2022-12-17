import React from "react";
import "./styles.css";
import data from "./data";
import WeatherForecast from "./components/WeatherForecast"

export default function App() {
  console.log("App Rendered");

  return (
    <div className="App">
      <h1>My WeatherIcons App</h1>
      <WeatherForecast/>
    </div>
  );
}
