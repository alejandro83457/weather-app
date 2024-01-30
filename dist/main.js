/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLGVBQWU7QUFDekIsVUFBVSxhQUFhO0FBQ3ZCLFVBQVUsU0FBUzs7QUFFbkI7QUFDQSwwQkFBMEIsS0FBSyxJQUFJLE9BQU87QUFDMUM7QUFDQTtBQUNBLDJCQUEyQixPQUFPOztBQUVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0VBQWdFLFFBQVEsS0FBSyxJQUFJO0FBQ2pGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQVBJX0tFWSA9ICdiYTNmYzE5YmQzNDU0MDgzYWJlNDM1MTkyNDI2MDEnO1xuXG4vLyBhZGRzIHdlYXRoZXIgZGF0YSB0byBET01cbmZ1bmN0aW9uIGFkZFdlYXRoZXJEYXRhKGRhdGEpIHtcbiAgY29uc3Qgd2VhdGhlckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWF0aGVyJyk7XG5cbiAgLy8gcmVtb3ZlIGNoaWxkIGlmIHByZXNlbnRcbiAgaWYgKHdlYXRoZXJEaXYuZmlyc3RDaGlsZCkgd2VhdGhlckRpdi5yZW1vdmVDaGlsZCh3ZWF0aGVyRGl2LmZpcnN0Q2hpbGQpO1xuXG4gIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbG9jRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgdGVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICBtYWluRGl2LmlkID0gJ21haW4tZGl2JztcbiAgbG9jRGl2LmlkID0gJ2xvY2F0aW9uLWRpdic7XG4gIHRlbXBEaXYuaWQgPSAndGVtcC1kaXYnO1xuICB0ZXh0RGl2LmlkID0gJ3RleHQtZGl2JztcblxuICAvLyBkZXN0cnVjdHVyZSBkYXRhXG4gIGNvbnN0IHsgbmFtZSwgcmVnaW9uIH0gPSBkYXRhLmxvY2F0aW9uO1xuICBjb25zdCB7IHRleHQsIGljb24gfSA9IGRhdGEuY3VycmVudC5jb25kaXRpb247XG4gIGNvbnN0IHsgdGVtcF9mIH0gPSBkYXRhLmN1cnJlbnQ7XG5cbiAgLy8gYWRkIHRleHQgdG8gZGl2c1xuICBsb2NEaXYudGV4dENvbnRlbnQgPSBgJHtuYW1lfSwgJHtyZWdpb259YDtcbiAgdGV4dERpdi50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGltZy5zcmMgPSBpY29uO1xuICB0ZW1wRGl2LnRleHRDb250ZW50ID0gYCR7dGVtcF9mfcKwYDtcblxuICAvLyBhcHBlbmQgZGl2c1xuICBtYWluRGl2LmFwcGVuZENoaWxkKGltZyk7XG4gIG1haW5EaXYuYXBwZW5kQ2hpbGQobG9jRGl2KTtcbiAgbWFpbkRpdi5hcHBlbmRDaGlsZCh0ZW1wRGl2KTtcbiAgbWFpbkRpdi5hcHBlbmRDaGlsZCh0ZXh0RGl2KTtcblxuICB3ZWF0aGVyRGl2LmFwcGVuZENoaWxkKG1haW5EaXYpO1xuXG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xufVxuXG4vLyBzaG93cyBlcnJvciBvbiBkb20gaW5zdGVhZCBvZiB3ZWF0aGVyIGRhdGFcbmZ1bmN0aW9uIGhhbmRsZUVycm9yKGNvZGUpIHtcbiAgbGV0IGVycm9yTWVzc2FnZTtcbiAgY29uc3Qgd2VhdGhlckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWF0aGVyJyk7XG4gIGNvbnN0IGVycm9yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgLy8gcmVtb3ZlIGNoaWxkIGlmIHByZXNlbnRcbiAgaWYgKHdlYXRoZXJEaXYuZmlyc3RDaGlsZCkgd2VhdGhlckRpdi5yZW1vdmVDaGlsZCh3ZWF0aGVyRGl2LmZpcnN0Q2hpbGQpO1xuXG4gIGlmIChjb2RlID09PSA0MDMpIHtcbiAgICBlcnJvck1lc3NhZ2UgPSAnNDAzIEVycm9yLiBQb3NzaWJseSB3cm9uZyBBUEkga2V5Lic7XG4gIH0gZWxzZSBpZiAoY29kZSA9PT0gNDAwKSB7XG4gICAgZXJyb3JNZXNzYWdlID0gJzQwMCBFcnJvci4gSW52YWxpZCBpbnB1dC4nO1xuICB9IGVsc2Uge1xuICAgIGVycm9yTWVzc2FnZSA9ICdTb21ldGhpbmcgd2VudCB3cm9uZy4nO1xuICB9XG5cbiAgZXJyb3JEaXYudGV4dENvbnRlbnQgPSBlcnJvck1lc3NhZ2U7XG4gIGVycm9yRGl2LnN0eWxlLmZvbnRTaXplID0gJzUwcHgnO1xuICB3ZWF0aGVyRGl2LmFwcGVuZENoaWxkKGVycm9yRGl2KTtcbn1cblxuLy8gZmV0Y2hlcyB3ZWF0aGVyIGRhdGFcbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKGxvYykge1xuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0ke0FQSV9LRVl9JnE9JHtsb2N9YDtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuXG4gIC8vIHByaW50IGVycm9yIGFuZCByZXR1cm47XG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICBoYW5kbGVFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBhZGRXZWF0aGVyRGF0YSh3ZWF0aGVyRGF0YSk7XG59XG5cbi8vIGFkZHMgZXZlbnQgbGlzdGVuZXIgdG8gZmluZCBidXR0b25cbmZ1bmN0aW9uIGFkZEZpbmRMaXN0ZW5lcigpIHtcbiAgY29uc3QgZmluZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaW5kJyk7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvY2F0aW9uJyk7XG4gIGZpbmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKGlucHV0LnZhbHVlLmxlbmd0aCA+IDApIGdldFdlYXRoZXJEYXRhKGlucHV0LnZhbHVlKTtcbiAgfSk7XG59XG5cbi8vIGluaXQgY2FsbFxuYWRkRmluZExpc3RlbmVyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=