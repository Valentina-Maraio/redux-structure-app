import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//NEW
import { createStore } from 'redux'
import allReducers from './reducers'
import {Provider} from 'react-redux'

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

//STORE --> GLOBALIZED STATE

//ACTION (IT DESCRIBES WHAT WE WANT TO DO)
//an action is a function that returns an object
/*const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}*/


//REDUCER (IT INTERPRETES THE ACTION AND MODIFY THE STATE ACCORDINGLY)
/*const counter = (state = 0, action) => {
  switch(action.type){
    case 'INCREMENT':
        return state + 1
    case 'DECREMENT':
        return state - 1
    default:
      return state
  }
}*/

//let store = createStore(counter);

//display it in console
//store.subscribe(() => console.log(store.getState()));

//DISPATCH (IT EXECUTES THE ACTION)
//store.dispatch(increment());
//store.dispatch(decrement())


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
