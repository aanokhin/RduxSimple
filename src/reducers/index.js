import { combineReducers } from 'redux';
import WeatherReducer from './reducer-weather';

const rootReducer = combineReducers({
  weatherRdc: WeatherReducer
});

export default rootReducer;
