import {createStore} from 'redux';
import rootReducer from './combineReducers';
import middleware from './combineMiddleware';

const store = createStore(rootReducer, middleware);

export default store;
