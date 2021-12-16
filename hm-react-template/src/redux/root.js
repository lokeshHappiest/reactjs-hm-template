import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import CounterReducer from "./counter/CounterSlice";
import UserReducer from "./user/UserSlice";
import createSagaMiddleware from "@redux-saga/core";
import { UserWatcherSaga } from "../sagas/UserWatcherSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    counter: CounterReducer,
    user: UserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(UserWatcherSaga);

export default store;
