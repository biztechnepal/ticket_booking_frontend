import urls from 'src/utils/urls';
import { createApiService } from './apiServices';

export const getAllCategories = async () => {
  const response = await createApiService(urls.API_CATEGORY).fetchAll({
    sortType:"desc"
  });
  // const response = await createApiService(urls.API_GET_PRODUCTS).fetchAll(state.limit, state.page + 1, state.sortModel[0].field, state.sortModel[0].sort, state.filters);
  return response.data;
};
export const getAllSubCategories = async () => {
  const response = await createApiService(urls.API_SUB_CATEGORY).fetchAll({
    sortType:"desc"
  });
  return response.data;
};
export const service_getSubByCategory = async (categoryId) => {
  const response = await createApiService(urls.API_SUB_BY_CATEGORYID).fetchById(categoryId);
  return response.data;
};
