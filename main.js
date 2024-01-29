/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0EsZ0VBQWdFLFFBQVEsS0FBSyxJQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVLGVBQWU7QUFDekIsVUFBVSxhQUFhO0FBQ3ZCLFVBQVUsaUJBQWlCOztBQUUzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFQSV9LRVkgPSAnYmEzZmMxOWJkMzQ1NDA4M2FiZTQzNTE5MjQyNjAxJztcblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEobG9jKSB7XG4gIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PSR7QVBJX0tFWX0mcT0ke2xvY31gO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBhZGRXZWF0aGVyRGF0YSh3ZWF0aGVyRGF0YSk7XG59XG5cbmZ1bmN0aW9uIGFkZFdlYXRoZXJEYXRhKGRhdGEpIHtcbiAgY29uc3Qgd2VhdGhlckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWF0aGVyJyk7XG4gIGNvbnN0IHN1YkRpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBjb25zdCB7IG5hbWUsIHJlZ2lvbiB9ID0gZGF0YS5sb2NhdGlvbjtcbiAgY29uc3QgeyB0ZXh0LCBpY29uIH0gPSBkYXRhLmN1cnJlbnQuY29uZGl0aW9uO1xuICBjb25zdCB7IHRlbXBfZiwgdGVtcF9jIH0gPSBkYXRhLmN1cnJlbnQ7XG5cbiAgY29uc29sZS5sb2coZGF0YSk7XG4gIGNvbnNvbGUubG9nKG5hbWUsIHJlZ2lvbiwgdGV4dCwgdGVtcF9mLCB0ZW1wX2MpO1xufVxuXG5mdW5jdGlvbiBhZGRGaW5kTGlzdGVuZXIoKSB7XG4gIGNvbnN0IGZpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmluZCcpO1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2NhdGlvbicpO1xuICBmaW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGdldFdlYXRoZXJEYXRhKGlucHV0LnZhbHVlKTtcbiAgfSk7XG59XG5cbmFkZEZpbmRMaXN0ZW5lcigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9