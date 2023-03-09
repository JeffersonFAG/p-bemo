import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  result: [],
};
export const ItemsRecomendationsSlice = createSlice({
  name: "itemsRecomendations",
  initialState,
  reducers: {
    ItemsRecomendations: (_, action) => action.payload,
    noItemsRecomendations: (state) => state,
  },
});

//reducer
export default ItemsRecomendationsSlice.reducer;

//actions
export const { ItemsRecomendations, noItemsRecomendations } =
  ItemsRecomendationsSlice.actions;
