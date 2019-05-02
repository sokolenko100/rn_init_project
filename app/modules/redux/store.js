import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import rootReducer from './rootReducer.js';
import { composeWithDevTools } from 'remote-redux-devtools';

const middleware = [thunk, logger];
const store = createStore(
    rootReducer,
    compose(composeWithDevTools(applyMiddleware(...middleware))),
);

export default store;