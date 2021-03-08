import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/root-reducer";
import createSagaMiddleware from "redux-saga";
import { incrementCounter } from "./sagas/counter-saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(incrementCounter);

export default store;
