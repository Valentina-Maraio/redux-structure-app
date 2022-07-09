import './App.css';
import React from 'react'

import {compose, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import Random from './comps/Random';
import rootReducer from './comps/Random';

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk))
);


function App() {
  return (
    <Provider store={store}>
      <Random />
    </Provider>
  );
}

export default App;
