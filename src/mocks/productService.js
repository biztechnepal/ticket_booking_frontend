import axiosClient from 'src/utils/axios-client';
import urls from 'src/utils/urls';
import { createApiService } from './apiServices';

export const getAllProducts = async (state) => {
  const response = await createApiService(urls.API_GET_PRODUCTS).fetchAll({
    sortType:"desc"
  });
  // const response = await createApiService(urls.API_GET_PRODUCTS).fetchAll(state.limit, state.page + 1, state.sortModel[0].field, state.sortModel[0].sort, state.filters);
  return response.data;
};
export const deleteProduct = async (id) => {
  const response = await createApiService(urls.API_DELETE_PRODUCT).delete(id)
  // const response = await createApiService(urls.API_GET_PRODUCTS).fetchAll(state.limit, state.page + 1, state.sortModel[0].field, state.sortModel[0].sort, state.filters);
  return response.data;
};

// export const searchProducts = async (page, text, filters) => {
//   const response = await createApiService(ENDPOINTS.PRODUCT).Search(page, text, filters);
//   return response.data.Products;
// };

// export const createProduct = async (createData) => {
//   await createApiService(ENDPOINTS.PRODUCT).create(createData);
// };

// export const updateProduct = async (id, updateData) => {
//   await createApiService(ENDPOINTS.PRODUCT).update(id, updateData);
// };

// export const deleteProduct = (id) => async(dispatch) => {
//   dispatch(slice.actions.setLoading(true));
//   await createApiService(ENDPOINTS.PRODUCT).delete(id);
//   dispatch(slice.actions.setLoading(false));
// };

// export const setLimit = (limit) => async (dispatch) => {
//   dispatch(slice.actions.setLimit(limit));
// };

// export const setPage = (page) => async (dispatch) => {
//   dispatch(slice.actions.setPage(page));
// };

// export const setCount = (count) => async (dispatch) => {
//   dispatch(slice.actions.setCount(count));
// };

// export const setSortModel = (sortModel) => async (dispatch) => {
//   dispatch(slice.actions.setSortModel(sortModel));
// };

// export const setLoading = (loading) => async (dispatch) => {
//   dispatch(slice.actions.setLoading(loading));
// };;