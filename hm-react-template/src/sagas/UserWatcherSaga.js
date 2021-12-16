import { takeLatest } from "redux-saga/effects";
import { getUser } from "../redux/user/UserSlice";
import { handleGetUser } from "./UserHandler";

export function* UserWatcherSaga() {
  yield takeLatest(getUser, handleGetUser);
}
