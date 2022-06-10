import './App.css';
import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Button} from 'primereact/button'
import {increment, decrement }from './action'


function App() {
  const counter = useSelector(state => state.counterReducer)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Learn Redux</h1>
        <Button
        onClick={() => dispatch(increment(5))}
        >+</Button>
        <p>Counter: {counter}</p>
        <Button
        onClick={() => dispatch(decrement())}
        >-</Button>
      </header>
    </div>
  );
}

export default App;
