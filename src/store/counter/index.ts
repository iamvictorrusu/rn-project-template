import {createSelector, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../index';

type CounterState = {
  value: number;
};

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'Counter',
  initialState: initialState,
  reducers: {
    increment(state) {
      state.value = state.value + 1;
    },
    decrement(state) {
      state.value = state.value - 1;
    },
  },
});

export const {increment, decrement} = counterSlice.actions;

export const counterSelector = (state: RootState) => state.Counter;

export default counterSlice.reducer;
