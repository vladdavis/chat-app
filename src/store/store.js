import { createStore, applyMiddleware, compose } from 'redux';

import AsyncFunctionMiddleware from './middleware/AsyncFunctionMiddleware';
import WebSocketMiddleware from './middleware/WebSocketMiddleware';
import rootReducer from '../reducers/index';


const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(AsyncFunctionMiddleware),
    applyMiddleware(WebSocketMiddleware)
  )
);

export default store;
