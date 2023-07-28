const APIKEY = '843587735a64adb01ce2e19f2d093456';
const APIKEY_News = 'd087dde6d30a49c5b6ac3c9a1287dc77';

export const getCurrentWeatherData =  (city) => {
    console.log(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`);
    
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`)
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        return data;
    })
}

export const getLocationName = (lat,lon) => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`)
    .then(response => response.json())
    .then(data => {
        return data.name;
    })
}

export const get5DaysForecast = async (city) => {
    // return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${APIKEY}`)
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKEY}&units=metric`)
    .then(response => response.json())
    .then(data => {
        return data.list.filter(weather => weather.dt_txt.includes('12:00:00'))
    })
}


export const getDaysForecastData = (city) => {
    // console.log(`api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKEY}`);
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKEY}`)
    .then(response => response.json())
    .then(data => {
        // console.log(data.list);
        return groupForecastByDay(data.list);
    })
}

export const getNewsArticles =  (city) => {
    return fetch(`https://newsapi.org/v2/everything?q=${city}&apiKey=${APIKEY_News}&pageSize=15`)
    .then(response => response.json())
    .then(data => {
        console.log(data.articles)
        return data.articles;
    })
}

export const groupForecastByDay = (forecastData) => {
    const groupedData = {};
  
    forecastData.forEach(item => {
      const date = item.dt_txt.split(' ')[0];
      if (!groupedData[date]) {
        groupedData[date] = [];
      }
      groupedData[date].push(item);
    });
  
    return groupedData;
  }