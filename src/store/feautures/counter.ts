import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 100,
    message: 'hello redux'
  },
  reducers: {
    changeMessageAction(state, { payload }) {
      state.message = payload;
    },
    changeCountAction(state, { payload }) {
      state.count = state.count + payload;
    }
  }
});

export const { changeMessageAction, changeCountAction } = counterSlice.actions;

export default counterSlice.reducer;
