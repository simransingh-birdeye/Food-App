import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Reducer';
import itemSaga from './Saga';
import createSagaMiddleware from '@redux-saga/core';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore(
    { reducer: { cartReducer: cartReducer },
    middleware:()=>[sagaMiddleware] 
});

sagaMiddleware.run(itemSaga);

export default store;