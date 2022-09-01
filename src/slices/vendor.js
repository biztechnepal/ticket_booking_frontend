import { createSlice } from '@reduxjs/toolkit';
import Toast from 'src/_partials/toast';

const initialState = {
  vendors: []
};

const vendorSlice = createSlice({
  name: 'vendor',
  initialState,
  reducers: {
    storeVendor: (state, { payload }) => {
      state.vendors = payload;
    },
    addVendor: (state, { payload }) => {
      state.vendors.push(payload);
    },
    updateVendor: (state, { payload }) => {
      let index = state.vendors.findIndex(
        (object) => object._id === payload._id
      );

      state.vendors[index] = { ...state.vendors[index], ...payload };
    }
  }
});

export const { storeVendor, addVendor, updateVendor } = vendorSlice.actions;

export default vendorSlice.reducer;
