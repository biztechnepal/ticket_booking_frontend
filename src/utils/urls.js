export const BASEURL = 'http://localhost:8000';
export default {
  API_LOGIN: `${BASEURL}/admin/login`,
  API_ADD_USER: `${BASEURL}/users`,
  API_CHANGE_PASSWORD: `${BASEURL}/users/change-password`,
  API_UPDATE_PROFILE: `${BASEURL}/users/update-profile`,
  API_GET_PRODUCTS: `${BASEURL}/products`,
  API_SAVE_PRODUCTS_ADMIN: `${BASEURL}/products/admin`,
  API_SAVE_PRODUCTS_VENDOR: `${BASEURL}/products/vendor`,

  API_CATEGORY: `${BASEURL}/categories/`,
  API_SUB_CATEGORY: `${BASEURL}/sub-categories`,
  API_SUB_BY_CATEGORYID: `${BASEURL}/subByCategory/`, //category by id: 61e7879a79a1c338c8a19016
  API_GET_CATEGORY_BY_ID: `${BASEURL}/category-id/`, //category by id: 61e7879a79a1c338c8a19016
  API_GET_SUBCATEGORY_BY_ID: `${BASEURL}/sub-category-id/`, //sub category by id: 61e7879a79a1c338c8a19016

  API_DELETE_PRODUCT: `${BASEURL}/products/delete/`, //product id: 61e7879a79a1c338c8a19016
  API_DELETE_CATEGORIES: `${BASEURL}/categories/delete/`, //product id: 61e7879a79a1c338c8a19016
  API_DELETE_SUB_CATEGORIES: `${BASEURL}/sub-categories/delete/`, //product id: 61e7879a79a1c338c8a19016
  API_DELETE_USERS: `${BASEURL}/users/delete/`, //product id: 61e7879a79a1c338c8a19016
  API_DELETE_ORDERS: `${BASEURL}/orders/delete/`, //product id: 61e7879a79a1c338c8a19016
  API_DELETE_TAGS: `${BASEURL}/tags/delete/`, //product id: 61e7879a79a1c338c8a19016
  API_DELETE_BLOGS: `${BASEURL}/blogs/delete/`, //product id: 61e7879a79a1c338c8a19016
  API_DELETE_ACTIVITIES: `${BASEURL}/activities/delete/`, //product id: 61e7879a79a1c338c8a19016

  API_ADD_VENDOR: `${BASEURL}/vendor/register`,
  API_GET_VENDOR: `${BASEURL}/vendor`,
  API_UPDATE_VENDOR: `${BASEURL}/vendor`,
  API_LOGIN_VENDOR: `${BASEURL}/vendor/login`,

  API_CUSTOMER: `${BASEURL}/customer`,

  API_BUS: `${BASEURL}/bus`,
  API_BUS_VENDOR: `${BASEURL}/bus/vendor`,

  API_SEATS: `${BASEURL}/seat`,

  API_BUS_SCHEDULE: `${BASEURL}/bus-schedule`,
  API_BUS_SCHEDULE_VENDOR: `${BASEURL}/bus-schedule/my-schedules`,

  API_DESTINATION: `${BASEURL}/destination`,

  API_TICKET: `${BASEURL}/ticket`,

  API_DESTINATION: `${BASEURL}/destination`
};
