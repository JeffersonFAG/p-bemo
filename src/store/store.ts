import { configureStore } from "@reduxjs/toolkit";
import itemsApiReducer from "../feature/itemsApi/apiSlice";

export const store = configureStore({
  reducer: {
    apiItems: itemsApiReducer,
  },
});
