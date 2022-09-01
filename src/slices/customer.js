import { createSlice } from '@reduxjs/toolkit';
import Toast from 'src/_partials/toast';

const initialState = {
  customers: []
};

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    storeCustomer: (state, { payload }) => {
      state.customers = payload;
    }
  }
});

export const { storeCustomer } = customerSlice.actions;

export default customerSlice.reducer;
