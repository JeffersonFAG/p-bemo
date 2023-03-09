import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  result: [],
};
export const apiItemsMoviesSlice = createSlice({
  name: "apiItemsMovies",
  initialState,
  reducers: {
    viewItemsMovies: (_, action) => action.payload,
    noItemsMovies: (state) => state,
  },
});

//reducer
export default apiItemsMoviesSlice.reducer;

//actions
export const { viewItemsMovies, noItemsMovies } = apiItemsMoviesSlice.actions;
