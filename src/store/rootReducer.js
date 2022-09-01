import { combineReducers } from '@reduxjs/toolkit';
import productReducer from 'src/slices/product';
import categoryReducer from 'src/slices/category';

import vendorReducer from 'src/slices/vendor';
import customerReducer from 'src/slices/customer';
import busReducer from 'src/slices/bus';
import seatReducer from 'src/slices/seat';
import busScheduleReducer from 'src/slices/bus_schedule';

export const rootReducer = combineReducers({
  product: productReducer,
  category: categoryReducer,
  vendor: vendorReducer,
  customer: customerReducer,
  bus: busReducer,
  seat: seatReducer,
  bus_schedule: busScheduleReducer
});
