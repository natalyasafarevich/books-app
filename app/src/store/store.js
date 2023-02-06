import {createStore, compose, applyMiddleware} from 'redux'
import redusers from './redusers';
import thunk from 'redux-thunk';

const middlewareEnhancer = compose(applyMiddleware(thunk))
export const store = createStore(redusers, middlewareEnhancer,);
export default store;
