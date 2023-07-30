import React from "react";
import ForecastDayCard from "./ForecastDayCard";

const getDate = (timestamp) => {
  const dateObj = new Date(timestamp * 1000);
  return dateObj.toDateString();
};

function Weather({ weather, forecast }) {
  return (
    <div className="h-full m-4">
      {/* Current Weather Section*/}
      <div className="w-full  px-2">
        <div className="text-gray-900 text-md font-bold relative min-w-0 break-words rounded-lg overflow-hidden shadow-sm mb-4 w-full">
          <div className="px-6 py-6 relative rounded-lg bg-white bg-opacity-50">
            <div className="flex mb-4 justify-between items-center">
              <div>
                <h5 className="mb-0 font-medium text-xl">{`${weather.name}, ${weather.sys.country}`}</h5>
                <h6 className="mb-0">{getDate(weather.dt)}</h6>
                <small>{weather.weather.description}</small>
              </div>
              <div>
                <img
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  className="block w-24 h-24"
                  alt=""
                />
                <p className="text-center text-gray-800 text-sm">
                  {weather.weather[0].main}
                </p>
              </div>
              <div className="text-right">
                <h3 className="font-bold text-4xl mb-0">
                  <span>{weather.main.temp}&deg;C</span>
                </h3>
              </div>
            </div>
            <div className="flex justify-between items-center flex-wrap">
              <div className="flex flex-col">
                <span>Temp</span>
                <small className="px-2 inline-block">
                  {weather.main.temp}&nbsp;&deg;C
                </small>
              </div>

              <div className="flex flex-col">
                <span>Feels like</span>
                <small className="px-2 inline-block">
                  {weather.main.feels_like}&nbsp;&deg;C
                </small>
              </div>

              <div className="flex flex-col">
                <span>Temp min</span>
                <small className="px-2 inline-block">
                  {weather.main.temp_min}&nbsp;&deg;C
                </small>
              </div>

              <div className="flex flex-col">
                <span>Temp max</span>
                <small className="px-2 inline-block">
                  {weather.main.temp_max}&nbsp;&deg;C
                </small>
              </div>
            </div>
          </div>
          {/* <div className="divider table mx-2 text-center bg-transparent whitespace-nowrap"><span className="inline-block px-3"><small>Forecast</small></span></div> */}
          <div className=" py-6 relative">
            <div
              className="text-center justify-between items-center flex"
              style={{ flexFlow: "initial" }}
            >
              {forecast &&
                forecast.map((data) => {
                  return <ForecastDayCard data={data} key={data.dt} />;
                })}

              {/* <div className="text-center mb-0 flex items-center justify-center flex-col"><span className="block my-1">Sun</span><img src="https://i.imgur.com/ffgW9JQ.png" className="block w-8 h-8" alt='' /><span className="block my-1">38.3&deg;</span></div>
              <div className="text-center mb-0 flex items-center justify-center flex-col"><span className="block my-1">Mon</span><img src="https://i.imgur.com/BQbzoKt.png" className="block w-8 h-8" alt='' /><span className="block my-1">39.9&deg;</span></div>
              <div className="text-center mb-0 flex items-center justify-center flex-col"><span className="block my-1">Mon</span><img src="https://i.imgur.com/BQbzoKt.png" className="block w-8 h-8" alt='' /><span className="block my-1">40.1&deg;</span></div>
              <div className="text-center mb-0 flex items-center justify-center flex-col"><span className="block my-1">Mon</span><img src="https://i.imgur.com/ffgW9JQ.png" className="block w-8 h-8" alt='' /><span className="block my-1">41.5&deg;</span></div>
              <div className="text-center mb-0 flex items-center justify-center flex-col"><span className="block my-1">Mon</span><img src="https://i.imgur.com/ffgW9JQ.png" className="block w-8 h-8" alt='' /><span className="block my-1">40.1&deg;</span></div>
              <div className="text-center mb-0 flex items-center justify-center flex-col"><span className="block my-1">Mon</span><img src="https://i.imgur.com/BQbzoKt.png" className="block w-8 h-8" alt='' /><span className="block my-1">38&deg;</span></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
