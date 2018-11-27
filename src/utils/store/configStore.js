import { applyMiddleware, compose, createStore } from 'redux';
import counter from '../reducers/global.reducer';
import createSagaMiddleware from 'redux-saga'
import { initSagas } from './../sagas/index';



// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware];

const composible = [applyMiddleware(...middleWares)];
const enhancer = compose(...composible);

export const store = createStore(counter,enhancer);
initSagas(sagaMiddleware);

//sagaMiddleware.run(homeSage);

