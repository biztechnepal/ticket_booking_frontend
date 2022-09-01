import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bus_schedule: []
};

const busScheduleSlice = createSlice({
  name: 'bus_schedule',
  initialState,
  reducers: {
    storeBusSchedule: (state, { payload }) => {
      state.bus_schedule = payload;
    },
    addBusSchedule: (state, { payload }) => {
      state.bus_schedule.push(payload);
    }
  }
});

export const { storeBusSchedule, addBusSchedule } = busScheduleSlice.actions;

export default busScheduleSlice.reducer;
