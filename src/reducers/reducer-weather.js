import {FETCH_WEATHER} from '../actions/index'
const initialState = [];

export default function(state = initialState, action) {
//   if (!state){
//   state = initialState;
// }
console.log('Action recieved: ', action);
  switch (action.type) {
    case `${FETCH_WEATHER}_FULFILLED`:
        console.log('in fulfilled state');
//    case FETCH_WEATHER :
    //return state.concat([array.payload.data]);  ??NEVER DO MANIPULATE STATE directly
        console.log('The state:', state);
        console.log('The data:', action);

        let newStatePart = [action.payload, ...state]; //[city, city, city] NOT [city, [city, city]];
        // let newStatePart =
        // Object.assign({}, state, {state.concat([action.payload])} );
        //Object.assign({}, state, {data: action.payload.data} );
          // newStatePart.push(
          // action.payload.data);
        console.log('The newStatePart:', newStatePart);
        return  newStatePart;

    case `${FETCH_WEATHER}_PENDING`:
        console.log('in pending state');
  }
  return state
}
