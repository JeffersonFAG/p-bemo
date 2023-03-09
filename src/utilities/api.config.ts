//import "dotenv/config";

export const api = {
  itemsMovie:
    "https://api.themoviedb.org/3/movie/popular?api_key=7d057e9ef596fea562e6742c34620493",
  itemsTv:
    "https://api.themoviedb.org/3/tv/popular?api_key=7d057e9ef596fea562e6742c34620493",
};
//const API_KEY = process.env.REACT_APP_API_KEY;
export function urlRecomendations(idItem: number) {
  let itemsRecomendations: string = `https://api.themoviedb.org/3/movie/${idItem}/recommendations?api_key=7d057e9ef596fea562e6742c34620493`;
  return itemsRecomendations;
}
