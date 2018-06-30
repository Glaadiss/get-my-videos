import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import saga from "./sagas";

import reducer from "./reducers";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);

export const store = createStore(reducer, composeEnhancers(middleware));

sagaMiddleware.run(saga);
