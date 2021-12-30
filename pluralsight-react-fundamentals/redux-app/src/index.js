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

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
