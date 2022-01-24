import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware} from 'redux';  
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducers from './redux/reducers/index';
const store=createStore(rootReducers, applyMiddleware(thunk,logger)); 


ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
