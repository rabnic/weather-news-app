const APIKEY = '843587735a64adb01ce2e19f2d093456';

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

export const getDaysForecastData = async (city) => {
    console.log(`api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKEY}`);
    await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKEY}`)
    .then(response => response.json())
    .then(data => {
        let list = data.list;
        console.log(list.map(item => new Date(item.dt * 1000).toDateString()));
    })
}