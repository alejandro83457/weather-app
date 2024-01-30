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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVSxlQUFlO0FBQ3pCLFVBQVUsYUFBYTtBQUN2QixVQUFVLFNBQVM7O0FBRW5CLDBCQUEwQixLQUFLLElBQUksT0FBTztBQUMxQztBQUNBO0FBQ0EsMkJBQTJCLFFBQVE7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdFQUFnRSxRQUFRLEtBQUssSUFBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQVBJX0tFWSA9ICdiYTNmYzE5YmQzNDU0MDgzYWJlNDM1MTkyNDI2MDEnO1xuXG5mdW5jdGlvbiBhZGRXZWF0aGVyRGF0YShkYXRhKSB7XG4gIGNvbnN0IHdlYXRoZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2VhdGhlcicpO1xuXG4gIC8vIHJlbW92ZSBjaGlsZCBpZiBwcmVzZW50XG4gIGlmICh3ZWF0aGVyRGl2LmZpcnN0Q2hpbGQpIHdlYXRoZXJEaXYucmVtb3ZlQ2hpbGQod2VhdGhlckRpdi5maXJzdENoaWxkKTtcblxuICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGxvY0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB0ZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHRlbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgLy8gZGVzdHJ1Y3R1cmUgZGF0YVxuICBjb25zdCB7IG5hbWUsIHJlZ2lvbiB9ID0gZGF0YS5sb2NhdGlvbjtcbiAgY29uc3QgeyB0ZXh0LCBpY29uIH0gPSBkYXRhLmN1cnJlbnQuY29uZGl0aW9uO1xuICBjb25zdCB7IHRlbXBfZiB9ID0gZGF0YS5jdXJyZW50O1xuXG4gIGxvY0Rpdi50ZXh0Q29udGVudCA9IGAke25hbWV9LCAke3JlZ2lvbn1gO1xuICB0ZXh0RGl2LnRleHRDb250ZW50ID0gdGV4dDtcbiAgaW1nLnNyYyA9IGljb247XG4gIHRlbXBEaXYudGV4dENvbnRlbnQgPSBgJHt0ZW1wX2Z9IEZgO1xuXG4gIG1haW5EaXYuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgbWFpbkRpdi5hcHBlbmRDaGlsZChsb2NEaXYpO1xuICBtYWluRGl2LmFwcGVuZENoaWxkKHRlbXBEaXYpO1xuICBtYWluRGl2LmFwcGVuZENoaWxkKHRleHREaXYpO1xuXG4gIHdlYXRoZXJEaXYuYXBwZW5kQ2hpbGQobWFpbkRpdik7XG5cbiAgY29uc29sZS5sb2coZGF0YSk7XG4gIGNvbnNvbGUubG9nKG5hbWUsIHJlZ2lvbiwgdGV4dCwgdGVtcF9mKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEobG9jKSB7XG4gIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PSR7QVBJX0tFWX0mcT0ke2xvY31gO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBhZGRXZWF0aGVyRGF0YSh3ZWF0aGVyRGF0YSk7XG59XG5cbmZ1bmN0aW9uIGFkZEZpbmRMaXN0ZW5lcigpIHtcbiAgY29uc3QgZmluZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaW5kJyk7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvY2F0aW9uJyk7XG4gIGZpbmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZ2V0V2VhdGhlckRhdGEoaW5wdXQudmFsdWUpO1xuICB9KTtcbn1cblxuYWRkRmluZExpc3RlbmVyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=