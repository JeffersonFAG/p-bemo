import React from "react";
import { useFetchItems } from "../hooks/useFetchItems";
import { urlRecomendations } from "../utilities/api.config";
import {
  ItemsRecomendations,
  noItemsRecomendations,
} from "../feature/itemsRecomendations/itemsRecomendationsSlice";

const Recomendations = (idRecomendations: any) => {
  const { id } = idRecomendations;
  const apiRecomendation = urlRecomendations(id);
  const { recomendationsItems } = useFetchItems(
    apiRecomendation,
    ItemsRecomendations,
    noItemsRecomendations
  );

  return (
    <div style={{ overflow: "auto" }}>
      <h3>Tambien puede interesarte</h3>
      <ul>
        {recomendationsItems.length > 0
          ? recomendationsItems.slice(0, 5).map((item: any) => (
              <li>
                <a href="">{item.title ?? item.name}</a>
              </li>
            ))
          : "No hay sugerencias o recomendaciones"}
      </ul>
    </div>
  );
};

export default Recomendations;
