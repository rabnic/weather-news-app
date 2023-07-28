import './App.css';
import React, { useState, useEffect } from 'react';
// import Geolocation from 'react-geolocation';
import { getCurrentWeatherData, get5DaysForecast, getNewsArticles, getLocationName } from './utils';
import SearchInput from './components/SearchInput';
import News from './components/News';
import Weather from './components/Weather';

function App() {

  const [activeTab, setActiveTab] = useState('weather');
  const [weatherData, setWeatherData] = useState(null);
  const [newsData, setNewsData] = useState(null);
  const [forecast, setForecast] = useState(null);

  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Check if the Geolocation API is available in the browser
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
          console.log(latitude, longitude)
          getLocationName(latitude, longitude)
            .then(res => {
              console.log(res)
              Promise.all([getCurrentWeatherData(res), getNewsArticles(res)])
                .then(([weather, news]) => {
                  get5DaysForecast(res).then((forecast) => {
                    console.log(forecast)
                    fetchData(weather, forecast, news);
                  })
                })
            })
        },
        error => {
          console.error(error);
        }
      );
    } else {
      console.error('Geolocation is not supported by your browser.');
    }
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const fetchData = (weather, forecast, news) => {
    console.log('fetchData', weather, forecast, news);
    setNewsData(news);
    setWeatherData(weather);
    setForecast(forecast);
  }

  return (
    <div className="App w-screen min-h-screen ">
      <div className="container mx-auto w-full h-full lg:w-3/4">
        <h1 className="text-3xl font-bold mb-4">Weather and News App</h1>
        <SearchInput fetchData={fetchData} />
        <div className="flex mt-2">
          <button
            className={`p-4 text-2xl font-bold uppercase ${activeTab === 'weather' ? 'bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 ' : 'bg-gray-300'} w-full lg:w-3/4 rounded-l`}
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

        {weatherData && newsData ?
          activeTab === 'weather' ? <Weather weather={weatherData} forecast={forecast} /> : <News articles={newsData} />
          : <h1>Nothing To Show</h1>
        }
      </div>
    </div>
  );
}

export default App;