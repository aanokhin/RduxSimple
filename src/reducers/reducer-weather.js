import {FETCH_WEATHER} from '../actions/index'
const initialState = [];

export default function(statePart = initialState , action) {
console.log('Action recieved: ', action);
  switch (action.type) {
    case `${FETCH_WEATHER}_FULFILLED`:
        console.log('in fulfilled state');
    case FETCH_WEATHER :
    //return state.concat([array.payload.data]);  ??NEVER DO MANIPULATE STATE directly
        console.log('The statePart:', statePart);
        console.log('The data:', action);

        let newStatePart = [action.payload, ...statePart]; //[city, city, city] NOT [city, [city, city]];
        //Object.assign({}, statePart, {data: action.payload.data} );
          // newStatePart.push(
          // action.payload.data);
        console.log('The newStatePart:', newStatePart);
        return  [action.payload, ...statePart];

    case `${FETCH_WEATHER}_PENDING`:
        console.log('in pending state');
  }
  return statePart
}
