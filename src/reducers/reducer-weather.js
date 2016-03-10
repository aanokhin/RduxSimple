import {FETCH_WEATHER} from '../actions/index'

export default function(state = [] , action) {
console.log('Action recieved: ', action);
  switch (action.type) {
    case FETCH_WEATHER :
     //return state.concat([array.payload.data]);  ??NEVER DO MANIPULATE STATE directly
     console.log('The state:', state);
     console.log('The data:', action.payload.data.city.name);
     return [ action.payload.data, ...state ]; //[city, city, city] NOT [city, [city, city]];
  }
  return state
}
