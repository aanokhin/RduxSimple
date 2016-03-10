import Key from './key.js'
import axios from 'axios';

let API_KEY = Key.API_KEY;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export function fetchWeather(city) {
  let url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  
  console.log("Request: ", request);

  return {
    type : FETCH_WEATHER,
    payload: request,
  }
}
