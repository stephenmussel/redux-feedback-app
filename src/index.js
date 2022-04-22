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

const feedbackObject = {
    feeling: '',
    understanding: '',
    support: '',
    comments: '',
}

// TODO add more reducers?
// TODO switch statement?
const feedbackReducer = (state = feedbackObject, action) => {
    console.log('in feedbackReducer', action);

    if(action.type === 'ADD_FEELING') {
        return {...state, feeling: action.payload.feeling}
    } else if(action.type === 'ADD_UNDERSTANDING') {
        return {...state, understanding: action.payload.understanding}
    } else if(action.type === 'ADD_SUPPORT') {
        return {...state, support: action.payload.support}
    }
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
