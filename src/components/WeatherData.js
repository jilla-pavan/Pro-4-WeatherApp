import React from "react";

function WeatherData({ info }) {
  console.log(info);
  return (
    <div className="w-[600px] h-[300px] bg-purple-500 rounded-lg flex items-center flex-col justify-center">
      <h1 className="text-2xl font-bold">Weather Forecast</h1>

      <ul className=" m-4 border border-black p-6 rounded-lg bg-purple-300 w-10/12">
        <li className="font-bold text-2xl text-center">{info.name}</li>
        <li className="text-xl flex justify-between items-center my-2 rounded-md">
          <div className="flex">
            <h2 className="font-semibold">Temperature (K)</h2>
            <img
              className="w-6 mx-2"
              src="https://cdn-icons-png.flaticon.com/128/1843/1843544.png"
            />
          </div>
          <span className="text-xl font-bold">{info.main.temp} K</span>
        </li>
        <li className="text-xl flex justify-between items-center my-2 rounded-md">
          <div className="flex">
            <h2 className="font-semibold">Temperature (C)</h2>
            <img
              className="w-6 mx-2"
              src="https://cdn-icons-png.flaticon.com/128/2426/2426702.png"
            />
          </div>
          <span className="text-xl font-bold">
            {Math.round(info.main.temp - 273)} °C
          </span>
        </li>
        <li className="text-xl flex justify-between items-center my-2 rounded-full">
          <div className="flex">
            <h2 className="font-semibold">Wind</h2>
            <img
              className="w-6 mx-2"
              src="https://cdn-icons-png.flaticon.com/128/578/578158.png"
            />
          </div>
          <span className="text-xl font-bold">{info.wind.speed} m/s</span>
        </li>
        <li className="text-xl flex justify-between items-center my-2 rounded-full">
          <div className="flex">
            <h2 className="font-semibold">Humidity </h2>
            <img
              className="w-6 mx-2"
              src="https://cdn-icons-png.flaticon.com/128/5664/5664979.png"
            />
          </div>
          <span className="font-bold text-xl">{info.main.humidity} %</span>{" "}
        </li>

        <li className="text-xl flex justify-between items-center rounded-full">
          <div className="flex">
            <h2 className="font-semibold">Description</h2>
            <img
              className="w-6 mx-2"
              src="https://cdn-icons-png.flaticon.com/128/3391/3391053.png"
            />
          </div>
          <span className="font-bold text-xl">
            {info.weather[0].description}
          </span>{" "}
        </li>
      </ul>
    </div>
  );
}

export default WeatherData;
