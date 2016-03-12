import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers/index';
import ReduxPromise from 'redux-promise-middleware';

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    ReduxPromise(),
    createLogger()
)(createStore);


export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);

 //   console.log("configureStore() rootReducer initialState", rootReducer, initialState);

    // if (module.hot) {
    //     // Enable Webpack hot module replacement for reducers
    //     module.hot.accept('./reducers/index', () => {
    //         const nextRootReducer = require('./reducers/index');
    //         store.replaceReducer(nextRootReducer);
    //     })
    // }
console.log("store.getState():  ", store.getState());
    return store;
}
