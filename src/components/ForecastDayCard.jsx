import React from 'react';

const getWeekDay = (timestamp) => {
    const dateObj = new Date(timestamp * 1000);
    return dateObj.toLocaleString('en-us', { weekday: 'long' });
}

const ForecastDayCard = ({ data }) => {

    return (
        <div>
            {/* <div className="text-center mb-0 flex items-center justify-center flex-col">
                <span className="block my-1">Sun</span>
                <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} className="block w-8 h-8" alt='' />
                <span className="block my-1">38.3&deg;</span>
            </div> */}

            <div className="bg-white p-2 bg-opacity-50 flex-col rounded-3xl flex  items-center shadow-md">
                <div>
                    <p className="text-lg font-bold text-right text-gray-900">{getWeekDay(data.dt)}</p>
                </div>
                <div>
                    <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} className="block w-16 h-16" alt='' />
                    <p className="text-center text-gray-500 mt-2 text-sm">Cloudy</p>
                </div>
                <div>
                    <p className="text-lg font-bold text-right text-gray-900">{data.main.temp}°C</p>
                </div>
            </div>

        </div>
    )
}

export default ForecastDayCard;