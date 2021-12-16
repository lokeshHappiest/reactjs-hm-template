import { fetchUser } from "../api/User";
import { setUser } from "../redux/user/UserSlice";
import { call, put } from "@redux-saga/core/effects";

export function* handleGetUser() {
  const response = yield call(fetchUser);
  const user = response.data;
  yield put(setUser(user));
}
