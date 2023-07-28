import React, { useState } from 'react';

import { getCurrentWeatherData, get5DaysForecast, getNewsArticles } from '../utils';

function SearchInput({fetchData}) {
    const [location, setLocation] = useState('');

    const handleSearch = async (loc) => {

        Promise.all([getCurrentWeatherData(loc), getNewsArticles(loc)])
        .then(([weather, news]) => {
            get5DaysForecast(loc).then((forecast) => {
                console.log(forecast)
                fetchData(weather,forecast ,news);
            })
        })
    }
    
    return (
        <>
            <div className='flex mx-auto gap-16'>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="flex flex-1 ">
                    <input type="search"
                        id="default-search"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="block w-full py-4 pl-4 pr-10 text-sm text-gray-900 border border-gray-300 rounded-l-lg bg-gray-50 focus:ring focus:border-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter location" required />
                    <button className="flex items-center p-3 border rounded-r-lg hover:bg-gray-400 bg-gray-50" onClick={() => handleSearch(location)}>
                        <svg className="w-4 h-4 text-gray-800 dark:text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </button>
                    {/* <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
                </div>
                <button className="flex items-center p-3 border rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40  border-gray-100" >
                    <svg className="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                        <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                    </svg>
                </button>
            </div>
        </>

    )
}


export default SearchInput;