import React, { useState } from "react";
import WeatherData from "./WeatherData";
import { APIkey, WeatherAPI } from "../utils/constants";

function WeatherBody() {
  const [cityName, setCityName] = useState("");
  const [weatherinfo, setWeatherinfo] = useState({});

  const fetchHandler = async () => {
    
    const fetchData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}`
    );
    const data = await fetchData.json();
    setWeatherinfo(data);
  };

  return (
    <div className="flex gap-4">
      <div className="w-[500px] h-[300px] bg-purple-500 rounded-lg flex flex-col items-center justify-center">
        <h1 className="font-bold text-3xl m-4">वातावरण-(Weather App) </h1>
        <input
          className="border border-black w-9/12 rounded-md px-4 py-2"
          placeholder="Enter City"
          value={cityName}
          onChange={(e) => {
            setCityName(e.target.value);
          }}
        />
        <button
          className="border border-black bg-green-100 m-4 p-2 rounded-md hover:bg-green-300"
          onClick={() => {
            fetchHandler();
          }}
        >
          Get Weather
        </button>
      </div>
      <div className="">
        <WeatherData info={weatherinfo} />
      </div>
    </div>
  );
}

export default WeatherBody;
