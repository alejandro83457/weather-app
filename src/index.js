const API_KEY = 'ba3fc19bd3454083abe43519242601';
const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Calexico`;

async function getWeatherData() {
  const response = await fetch(url);
  const weatherData = await response.json();
  console.log(weatherData);
}

getWeatherData();
