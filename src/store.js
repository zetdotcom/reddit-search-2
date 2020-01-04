import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from './reducers'
import thunk from "redux-thunk";

const reduxDev = '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__';
const composeEnhancers = window[reduxDev] || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;