import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './containers/app';
import configureStore from "./configureStore"
//import reducers from './reducers/index';

//const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = configureStore();


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
