import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  result: [],
};
export const apiItemsTvSlice = createSlice({
  name: "apiItemsTv",
  initialState,
  reducers: {
    viewItemsTv: (_, action) => action.payload,
    noItemsTv: (state) => state,
  },
});

//reducer
export default apiItemsTvSlice.reducer;

//actions
export const { viewItemsTv, noItemsTv } = apiItemsTvSlice.actions;
