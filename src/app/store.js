import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../Product/productSlice';

export default configureStore({
  reducer: {
    products: productReducer,
  }
});
