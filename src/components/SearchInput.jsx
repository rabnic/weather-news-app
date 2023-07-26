import React, { useState } from 'react';

import { getCurrentWeatherData, getDaysForecastData } from '../utils';

function SearchInput() {
    const [location, setLocation] = useState('');

    const handleWeatherSearch = async () => { 
        // const result = getCityWeatherData(location);
        const result = await getDaysForecastData(location);
        // console.log(result);
    }

    return (

        <div className='w-[20%] mx-auto'>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="flex">
                <input type="search" 
                id="default-search" 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="block w-full py-4 pl-4 pr-10 text-sm text-gray-900 border border-gray-300 rounded-l-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="Enter location" required />
                <button className="flex items-center p-3 border rounded-r-lg hover:bg-gray-400 bg-gray-50" onClick={handleWeatherSearch}>
                    <svg className="w-4 h-4 text-gray-800 dark:text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </button>
                {/* <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
            </div>
        </div>

    )
}

export default SearchInput;