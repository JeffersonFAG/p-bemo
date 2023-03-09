import { useEffect } from "react";
import { getItems } from "../services";
import { useDispatch, useSelector } from "react-redux";

export const useFetchItems = (
  api: string,
  actionSucces: any,
  actionFailed: any
) => {
  const dispatch = useDispatch();
  const { apiItemsMovies, apiItemsTv, recomendationsItems } = useSelector(
    (state: any) => state
  );

  useEffect(() => {
    getItems(api)
      .then((res) => {
        if (!res.err) {
          dispatch(actionSucces(res.results));
        } else {
          dispatch(actionFailed());
        }
      })
      .catch((err) => console.log(err));
  }, [dispatch]);

  return { apiItemsMovies, apiItemsTv, recomendationsItems };
};
