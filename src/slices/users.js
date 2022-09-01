import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import client from '../../axios';
import {URLS} from '../../core/constants/urls';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const res = await client.get(URLS.products);
    return res.data;
  },
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    isLoading: false,
    error: null,
  },

  reducers: {
    clearError: state => {
      state.error = null;
    },
  },

  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });

    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const {clearError} = productsSlice.actions;
export default productsSlice.reducer;
