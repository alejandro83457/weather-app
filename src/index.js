const API_KEY = 'ba3fc19bd3454083abe43519242601';

async function getWeatherData(loc) {
  const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${loc}`;
  const response = await fetch(url);
  const weatherData = await response.json();
  addWeatherData(weatherData);
}

function addWeatherData(data) {
  const weatherDiv = document.querySelector('#weather');
  const subDiv1 = document.createElement('div');

  const { name, region } = data.location;
  const { text, icon } = data.current.condition;
  const { temp_f, temp_c } = data.current;

  console.log(data);
  console.log(name, region, text, temp_f, temp_c);
}

function addFindListener() {
  const find = document.querySelector('#find');
  const input = document.querySelector('#location');
  find.addEventListener('click', () => {
    getWeatherData(input.value);
  });
}

addFindListener();
