
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllCategories, getAllSubCategories, service_getSubByCategory } from 'src/mocks/categoryService';
import { getAllProducts } from 'src/mocks/productService';
import Toast from 'src/_partials/toast';

const initialState = {
  categories: [],
  subCategories: [],
  page: 0,
  limit: 10,
  count: 0,
  isLoading: true,
  sortModel: [{ field: 'Name', sort: 'asc' }]
};
export const fetchCategories = createAsyncThunk('products/fetchCategories',async (data) => {
    try {
      const response = await getAllCategories();
      if (response.success) return response.categories;
      else Toast.error("Data not found")
    } catch (error) {
      Toast.error("Data fetching error: #Categories")
    }
  },
);
export const fetchSubCategories = createAsyncThunk('products/fetchSubCategories',async (data) => {
    try {
      const response = await getAllSubCategories();
      if (response.success) return response;
      else Toast.error("Data not found")
    } catch (error) {
      Toast.error("Data fetching error: #Sub-Categories")
    }
  },
);
// export const fetchSubCategoryByCategory = createAsyncThunk('products/fetchSubByCategory',async (categoryId) => {
//     try {
//       const response = await service_getSubByCategory(categoryId);
//       if (response.success) return response;
//       else Toast.error("Data not found")
//     } catch (error) {
//       Toast.error("Data fetching error: #Sub-Categories")
//     }
//   },
// );

export const fetchSubCategoryByCategory = (categoryId) => {
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
  name: 'categories',
  initialState,
  reducers: {
    setSubCategories(state, action) {
      state.subCategories = action.payload;
    },
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
    builder.addCase(fetchCategories.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
    });

    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    builder.addCase(fetchSubCategories.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(fetchSubCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.subCategories = action.payload;
    });

    builder.addCase(fetchSubCategories.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const { setLimit,
  setPage,
  setCount,
  setSortModel,setSubCategories } = slice.actions;

export default slice.reducer;
