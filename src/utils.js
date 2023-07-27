const APIKEY = '843587735a64adb01ce2e19f2d093456';
const APIKEY_News = 'd087dde6d30a49c5b6ac3c9a1287dc77';

export const getCurrentWeatherData = async (city) => {
    console.log(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`);
    let weatherData = {}
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        weatherData = data;
    })
    return weatherData;
}

export const getDaysForecastData = (city) => {
    // console.log(`api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKEY}`);
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKEY}`)
    .then(response => response.json())
    .then(data => {
        console.log(data.list);
        return data.list;
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