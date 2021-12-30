import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = { value: 0 };

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'increment':
      return { value: state.value + 1};
    case 'decrement':
      return { value: state.value - 1};
    default:
      return state;
  }
}

const store = createStore(reducer);

function incrementCounter() {
  store.dispatch({ type: 'increment' });
}

function decrementCounter() {
  store.dispatch({ type: 'decrement' });
}

function render() {
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App 
        counter={store.getState().value}
        incrementCounter={incrementCounter}
        decrementCounter={decrementCounter}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
}

render();
store.subscribe(render);
