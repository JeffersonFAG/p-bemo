import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  result: [],
};
export const apiItemsSlice = createSlice({
  name: "apiItems",
  initialState,
  reducers: {
    viewItems: (_, action) => action.payload,
    noItems: (state) => state,
  },
});

//reducer
export default apiItemsSlice.reducer;

//actions
export const { viewItems, noItems } = apiItemsSlice.actions;
