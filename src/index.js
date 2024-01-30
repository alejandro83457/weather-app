const API_KEY = 'ba3fc19bd3454083abe43519242601';

function addWeatherData(data) {
  const weatherDiv = document.querySelector('#weather');

  // remove child if present
  if (weatherDiv.firstChild) weatherDiv.removeChild(weatherDiv.firstChild);

  const mainDiv = document.createElement('div');
  const locDiv = document.createElement('div');
  const textDiv = document.createElement('div');
  const tempDiv = document.createElement('div');
  const img = document.createElement('img');

  // destructure data
  const { name, region } = data.location;
  const { text, icon } = data.current.condition;
  const { temp_f } = data.current;

  locDiv.textContent = `${name}, ${region}`;
  textDiv.textContent = text;
  img.src = icon;
  tempDiv.textContent = `${temp_f} F`;

  mainDiv.appendChild(img);
  mainDiv.appendChild(locDiv);
  mainDiv.appendChild(tempDiv);
  mainDiv.appendChild(textDiv);

  weatherDiv.appendChild(mainDiv);

  console.log(data);
  console.log(name, region, text, temp_f);
}

async function getWeatherData(loc) {
  const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${loc}`;
  const response = await fetch(url);
  const weatherData = await response.json();
  addWeatherData(weatherData);
}

function addFindListener() {
  const find = document.querySelector('#find');
  const input = document.querySelector('#location');
  find.addEventListener('click', () => {
    getWeatherData(input.value);
  });
}

addFindListener();
