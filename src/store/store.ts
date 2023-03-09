import { configureStore } from "@reduxjs/toolkit";
import itemsApiMoviesReducer from "../feature/itemsApiMovie/apiItemsMovieSlice";
import itemsApiTvReducer from "../feature/itemsApiTv/itemsTvSlice";
import recomendationsReducer from "../feature/itemsRecomendations/itemsRecomendationsSlice";

export const store = configureStore({
  reducer: {
    apiItemsMovies: itemsApiMoviesReducer,
    apiItemsTv: itemsApiTvReducer,
    recomendationsItems: recomendationsReducer,
  },
});
