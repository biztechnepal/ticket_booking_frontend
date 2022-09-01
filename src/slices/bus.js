import { createSlice } from '@reduxjs/toolkit';
import Toast from 'src/_partials/toast';

const initialState = {
  bus: []
};

const busSlice = createSlice({
  name: 'bus',
  initialState,
  reducers: {
    storeBus: (state, { payload }) => {
      state.bus = payload;
    },
    addBus: (state, { payload }) => {
      state.bus.push(payload);
    },
    updateBus: (state, { payload }) => {
      let index = state.bus.findIndex((object) => object._id === payload._id);

      state.bus[index] = { ...state.bus[index], ...payload };
    }
  }
});

export const { storeBus, addBus, updateBus } = busSlice.actions;

export default busSlice.reducer;
