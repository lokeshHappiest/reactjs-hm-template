import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter += 1;
    },
    decrement(state) {
      state.counter -= 1;
    },
    incrementBy(state, action) {
      console.log("action.payload = ", action.payload);
      state.counter += action.payload;
    },
  },
});

export default counterSlice.reducer;

export const { increment, decrement, incrementBy } = counterSlice.actions;
