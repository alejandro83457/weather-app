const API_KEY = 'ba3fc19bd3454083abe43519242601';

// adds weather data to DOM
function addWeatherData(data) {
  const weatherDiv = document.querySelector('#weather');

  // remove child if present
  if (weatherDiv.firstChild) weatherDiv.removeChild(weatherDiv.firstChild);

  const mainDiv = document.createElement('div');
  const locDiv = document.createElement('div');
  const textDiv = document.createElement('div');
  const tempDiv = document.createElement('div');
  const img = document.createElement('img');

  mainDiv.id = 'main-div';
  locDiv.id = 'location-div';
  tempDiv.id = 'temp-div';
  textDiv.id = 'text-div';

  // destructure data
  const { name, region } = data.location;
  const { text, icon } = data.current.condition;
  const { temp_f } = data.current;

  // add text to divs
  locDiv.textContent = `${name}, ${region}`;
  textDiv.textContent = text;
  img.src = icon;
  tempDiv.textContent = `${temp_f}°`;

  // append divs
  mainDiv.appendChild(img);
  mainDiv.appendChild(locDiv);
  mainDiv.appendChild(tempDiv);
  mainDiv.appendChild(textDiv);

  weatherDiv.appendChild(mainDiv);

  // console.log(data);
}

// shows error on dom instead of weather data
function handleError(code) {
  let errorMessage;
  const weatherDiv = document.querySelector('#weather');
  const errorDiv = document.createElement('div');

  // remove child if present
  if (weatherDiv.firstChild) weatherDiv.removeChild(weatherDiv.firstChild);

  if (code === 403) {
    errorMessage = '403 Error. Possibly wrong API key.';
  } else if (code === 400) {
    errorMessage = '400 Error. Invalid input.';
  } else {
    errorMessage = 'Something went wrong.';
  }

  errorDiv.textContent = errorMessage;
  errorDiv.style.fontSize = '50px';
  weatherDiv.appendChild(errorDiv);
}

// fetches weather data
async function getWeatherData(loc) {
  const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${loc}`;
  const response = await fetch(url);

  // print error and return;
  if (!response.ok) {
    handleError(response.status);
    return;
  }

  const weatherData = await response.json();
  addWeatherData(weatherData);
}

// adds event listener to find button
function addFindListener() {
  const find = document.querySelector('#find');
  const input = document.querySelector('#location');
  find.addEventListener('click', () => {
    if (input.value.length > 0) getWeatherData(input.value);
  });
}

// init call
addFindListener();
