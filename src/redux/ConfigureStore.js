import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import {About} from './about';
import {Contact} from './contact';
import {Work} from './work';
import {Home} from './home';
import {Query} from './query.js';

export const ConfigureStore = () => {
    const store = createStore(combineReducers({
        about:About,
        contact:Contact,
        work : Work,
        home : Home,
        query : Query
    }), applyMiddleware(thunk,logger));

    return store;
}