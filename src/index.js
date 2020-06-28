import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import reducers from './reducers';
import thunk from "redux-thunk";

// STORE -> GLOBALIZED STATE
// let store = createStore(counter);

// display in console
// store.subscribe(() => console.log(store.getState()));

// ACTION -> FUNCTION THAT RETURNS AN OBJECT
// const increment = () => {
//     return {
//         type: 'INCREMENT'
//     };
// };
// const decrement = () => {
//     return {
//         type: 'DECREMENT'
//     };
// };

// REDUCER -> TAKES CARE OF ALL ACTIONS IN APP
// (how action transforms state -> new state)
// is an arrow function that takes: initial state + action, returns: an object
// here, counter is a state

// const counter = (state = 0, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1;
//         case 'DECREMENT':
//             return state - 1;
//     }
// }

// DISPATCH (an action)
// store.dispatch(increment());

const initialState = {};

ReactDOM.render(
  <Provider store={createStore(
      reducers,
      initialState,
      applyMiddleware(thunk))}>
      <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
