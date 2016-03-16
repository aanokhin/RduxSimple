import Key from './key.js'
import fetch from 'isomorphic-fetch';

let API_KEY = Key.API_KEY;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
var fetchIt = function(url) {
  return fetch(url)
  .then(res => {
    console.log('response', res);
    return res.json();}
)
};
export function fetchWeather(city) {
  let url = `${ROOT_URL}&q=${city},us`;

  console.log("Requesting Weather ",  url);

  return {
    type : FETCH_WEATHER,
    payload: {promise: fetchIt(url)}
  };
}
