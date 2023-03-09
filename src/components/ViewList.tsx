import { itemInterface } from "../interfaces/itemInterface";
import { ViewItem } from "./ViewItem";
import { api } from "../utilities/api.config";
import { Loading } from "./Loading";
import "../styles/styles.css";
import { useFetchItems } from "../hooks/useFetchItems";
import {
  noItemsMovies,
  viewItemsMovies,
} from "../feature/itemsApiMovie/apiItemsMovieSlice";
import { noItemsTv, viewItemsTv } from "../feature/itemsApiTv/itemsTvSlice";

const ViewList = () => {
  const { apiItemsTv } = useFetchItems(api.itemsTv, viewItemsTv, noItemsTv);

  const { apiItemsMovies } = useFetchItems(
    api.itemsMovie,
    viewItemsMovies,
    noItemsMovies
  );

  return (
    <section>
      {apiItemsTv.length > 0 ? (
        apiItemsTv.map((item: itemInterface, key: number) => (
          <ViewItem
            key={key}
            title={item.name ?? item.title}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
            overview={item.overview}
            backdrop_path={item.backdrop_path}
            id={item.id}
          />
        ))
      ) : (
        <>
          <Loading />
        </>
      )}

      {apiItemsMovies.length > 0 ? (
        apiItemsMovies.map((item: itemInterface, key: number) => (
          <ViewItem
            key={key}
            title={item.name ?? item.title}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
            overview={item.overview}
            backdrop_path={item.backdrop_path}
            id={item.id}
          />
        ))
      ) : (
        <>
          <Loading />
        </>
      )}
    </section>
  );
};

export default ViewList;
