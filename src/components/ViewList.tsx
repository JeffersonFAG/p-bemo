import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { noItems, viewItems } from "../feature/itemsApi/apiSlice";
import { getItems } from "../services";
import { itemInterface } from "../interfaces/itemInterface";
import { ViewItem } from "./ViewItem";
import { api } from "../utilities/api.config";
import { Loading } from "./Loading";
import "./styles.css";

const ViewList = () => {
  const dispatch = useDispatch();
  const apiItems = useSelector((state: any) => state.apiItems);
  const [data, setData] = useState([]);

  useEffect(() => {
    getItems(api.itemsMovie)
      .then((res) => {
        if (!res.err) {
          const data = res.results;
          dispatch(viewItems(data));
          getItems(api.itemsTv)
            .then((res) => {
              if (!res.err) {
                const dataRes = res.results;
                dispatch(viewItems([...dataRes, ...data]));
              } else {
                dispatch(noItems());
              }
            })
            .catch((error) => console.log(error));
        } else {
          dispatch(noItems());
        }
      })
      .catch((error) => console.log(error));
  }, [dispatch]);

  useEffect(() => {
    setData(apiItems);
  }, [apiItems]);

  return (
    <section>
      {data.length > 0 ? (
        data.map((item: itemInterface, key: number) => (
          <ViewItem
            key={key}
            title={item.title}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
            overview={item.overview}
            backdrop_path={item.backdrop_path}
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
