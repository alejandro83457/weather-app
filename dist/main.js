/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVUsZUFBZTtBQUN6QixVQUFVLGFBQWE7QUFDdkIsVUFBVSxTQUFTOztBQUVuQjtBQUNBLDBCQUEwQixLQUFLLElBQUksT0FBTztBQUMxQztBQUNBO0FBQ0EsMkJBQTJCLE9BQU87O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0VBQWdFLFFBQVEsS0FBSyxJQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBBUElfS0VZID0gJ2JhM2ZjMTliZDM0NTQwODNhYmU0MzUxOTI0MjYwMSc7XG5cbmZ1bmN0aW9uIGFkZFdlYXRoZXJEYXRhKGRhdGEpIHtcbiAgY29uc3Qgd2VhdGhlckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWF0aGVyJyk7XG5cbiAgLy8gcmVtb3ZlIGNoaWxkIGlmIHByZXNlbnRcbiAgaWYgKHdlYXRoZXJEaXYuZmlyc3RDaGlsZCkgd2VhdGhlckRpdi5yZW1vdmVDaGlsZCh3ZWF0aGVyRGl2LmZpcnN0Q2hpbGQpO1xuXG4gIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbG9jRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgdGVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICBsb2NEaXYuaWQgPSAnbG9jYXRpb24tZGl2JztcbiAgdGVtcERpdi5pZCA9ICd0ZW1wLWRpdic7XG4gIHRleHREaXYuaWQgPSAndGV4dC1kaXYnO1xuXG4gIC8vIGRlc3RydWN0dXJlIGRhdGFcbiAgY29uc3QgeyBuYW1lLCByZWdpb24gfSA9IGRhdGEubG9jYXRpb247XG4gIGNvbnN0IHsgdGV4dCwgaWNvbiB9ID0gZGF0YS5jdXJyZW50LmNvbmRpdGlvbjtcbiAgY29uc3QgeyB0ZW1wX2YgfSA9IGRhdGEuY3VycmVudDtcblxuICAvLyBhZGQgdGV4dCB0byBkaXZzXG4gIGxvY0Rpdi50ZXh0Q29udGVudCA9IGAke25hbWV9LCAke3JlZ2lvbn1gO1xuICB0ZXh0RGl2LnRleHRDb250ZW50ID0gdGV4dDtcbiAgaW1nLnNyYyA9IGljb247XG4gIHRlbXBEaXYudGV4dENvbnRlbnQgPSBgJHt0ZW1wX2Z9wrBgO1xuXG4gIC8vIGFwcGVuZCBkaXZzXG4gIG1haW5EaXYuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgbWFpbkRpdi5hcHBlbmRDaGlsZChsb2NEaXYpO1xuICBtYWluRGl2LmFwcGVuZENoaWxkKHRlbXBEaXYpO1xuICBtYWluRGl2LmFwcGVuZENoaWxkKHRleHREaXYpO1xuXG4gIHdlYXRoZXJEaXYuYXBwZW5kQ2hpbGQobWFpbkRpdik7XG5cbiAgY29uc29sZS5sb2coZGF0YSk7XG4gIGNvbnNvbGUubG9nKG5hbWUsIHJlZ2lvbiwgdGV4dCwgdGVtcF9mKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEobG9jKSB7XG4gIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PSR7QVBJX0tFWX0mcT0ke2xvY31gO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBhZGRXZWF0aGVyRGF0YSh3ZWF0aGVyRGF0YSk7XG59XG5cbmZ1bmN0aW9uIGFkZEZpbmRMaXN0ZW5lcigpIHtcbiAgY29uc3QgZmluZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaW5kJyk7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvY2F0aW9uJyk7XG4gIGZpbmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZ2V0V2VhdGhlckRhdGEoaW5wdXQudmFsdWUpO1xuICB9KTtcbn1cblxuYWRkRmluZExpc3RlbmVyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=