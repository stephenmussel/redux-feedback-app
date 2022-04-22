import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// provides store to App.jsx
import { Provider } from 'react-redux';

// setting up store and logger
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// TODO add more reducers?
const feedbackReducer = (state = [], action) => {
    console.log('in feedbackReducer');
    return state;
}

// creates store
const ReduxStore = createStore(
    combineReducers({
        feedbackReducer,
    }),
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store={ReduxStore}>
        <App />
    </Provider>, 
document.getElementById('root'));
registerServiceWorker();
