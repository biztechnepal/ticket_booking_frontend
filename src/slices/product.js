
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllProducts } from 'src/mocks/productService';
import Toast from 'src/_partials/toast';

const initialState = {
  products: [],
  page: 0,
  limit: 10,
  count: 0,
  isLoading: true,
  sortModel: [{ field: 'Name', sort: 'asc' }]
};
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (state) => {
    try {
      const response = await getAllProducts(state);
    if(response.success)return response;
    else Toast.error("Data not found")
    } catch (error) {
      Toast.error("Data fetching error: #Products")
    }
  },
);
export const mw_deleteProduct = (id) => {
  return async dispatch => {
    try {
      const response = await service_getSubByCategory(categoryId);
      if (response.success) 
      {
        dispatch(setSubCategories((response?.subCategory)))
      } 
      else Toast.error("Data not found")
    } catch (error) {
      Toast.error("Data fetching error: #Sub-Categories")
    }
  }
}

const slice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setLimit(state, action) {
      state.limit = action.payload;
    },

    setPage(state, action) {
      state.page = action.payload;
    },

    setCount(state, action) {
      state.count = action.payload;
    },

    setSortModel(state, action) {
      state.sortModel = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload.products;
    });

    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const { setLimit,
  setPage,
  setCount,
  setSortModel } = slice.actions;

export default slice.reducer;
