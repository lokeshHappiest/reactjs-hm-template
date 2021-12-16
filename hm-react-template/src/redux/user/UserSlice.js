import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: undefined,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      const name = action.payload.name;
      const designation = action.payload.designation;
      state.user = { name, designation };
    },
    logout(state) {
      state.user = undefined;
    },
    getUser(state) {},
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export default UserSlice.reducer;

export const { login, logout, getUser, setUser } = UserSlice.actions;
