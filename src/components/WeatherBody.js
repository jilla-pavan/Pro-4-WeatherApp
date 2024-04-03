import React, { useEffect, useState } from "react";
import WeatherData from "./WeatherData";
import { APIkey, WeatherAPI } from "../utils/constants";

function WeatherBody() {
  const [cityName, setCityName] = useState("");
  const [text, setText] = useState("");

  const fetchHandler = async () => {
    const fetchData = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        { cityName } +
        "&appid=2bff6d75dbf46a6301b8b1670d717eea"
    );
    const data = await fetchData.json();
    console.log(data);
  };

  useEffect(() => {
    fetchHandler();
  }, [cityName]);

  return (
    <div className="flex gap-4">
      <div className="w-[500px] h-[300px] bg-purple-500 rounded-lg flex flex-col items-center justify-center">
        <h1 className="font-bold text-3xl m-4">वातावरण </h1>
        <input
          className="border border-black w-1/2 rounded-md px-4 py-2"
          placeholder="Enter City"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          className="border border-black bg-green-100 m-4 p-2 rounded-md hover:bg-green-300"
          onClick={() => {
            setCityName(text);
          }}
        >
          Get Weather
        </button>
      </div>
      <div className="">
        <WeatherData cityName={cityName} />
      </div>
    </div>
  );
}

export default WeatherBody;
