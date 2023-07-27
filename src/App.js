import './App.css';
import React, { useState } from 'react';
// import Geolocation from 'react-geolocation';

import SearchInput from './components/SearchInput';
import News from './components/News';
import Weather from './components/Weather';

function App() {

  const [activeTab, setActiveTab] = useState('weather');
  const [weatherData, setWeatherData] = useState(null);
  const [newsData, setNewsData] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const fetchData = (weather, news) => {
    setNewsData(news);
    setWeatherData(weather);
  }

  return (
    <div className="App w-screen min-h-screen bg-center bg-cover bg-no-repeat bg-[url('./river.jpg')] bg-blue-900 ">
      <div className="container mx-auto w-full h-full lg:w-3/4">
        <h1 className="text-3xl font-bold mb-4">Weather and News App</h1>
        <SearchInput fetchData={fetchData}/>
        <div className="flex mt-2">
          <button
            className={`p-4 text-2xl font-bold uppercase ${activeTab === 'weather' ?'bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 ' : 'bg-gray-300'} w-full lg:w-3/4 rounded-l`}
            onClick={() => handleTabClick('weather')}
          >
            Weather
          </button>
          <button
            className={`p-4 text-2xl font-bold uppercase ${activeTab === 'news' ? 'bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 ' : 'bg-gray-300'} w-full lg:w-3/4 rounded-r`}
            onClick={() => handleTabClick('news')}
          >
            News
          </button>
        </div>

        { weatherData && newsData.weather ?
        activeTab === 'weather' ? <Weather /> : <News />
        : <h1>Nothing To Show</h1>
        }
      </div>
    </div>
  );
}

export default App;


{/* <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 ">
    <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">We invest in the world’s potential</h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Get started
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
            <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Learn more
            </a>  
        </div>
    </div>
</section> */}





