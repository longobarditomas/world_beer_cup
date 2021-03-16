import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from "./rootReducers";

export const ConfigureStore = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
);