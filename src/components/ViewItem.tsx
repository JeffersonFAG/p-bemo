import React, { useState } from "react";
import { itemInterface } from "../interfaces/itemInterface";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "../styles/styles.css";
import Recomendations from "./Recomendations";
import { Loading } from "./Loading";

export const ViewItem = (itemProps: itemInterface) => {
  const { name, title, poster_path, vote_average, overview, id } = itemProps;

  const [open, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    height: 510,
    bgcolor: "background.paper",
    border: "none",
    borderRadius: "3%",
    boxShadow: 24,
    p: 2,
  };

  return (
    <div className="content">
      <button className="btn-items" onClick={handleOpenModal}>
        <section>
          {poster_path ? (
            <img
              alt={name}
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            />
          ) : (
            <Loading />
          )}
        </section>

        <h3 className="txt">{name ?? title}</h3>
        <h3 className="txt">Puntaje: {vote_average}</h3>
      </button>
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h3">
            {title ?? name ?? "Loading..."}
          </Typography>
          <div style={{ display: "flex", gap: ".8rem" }}>
            <div>
              <img
                alt={name ?? title ?? "Loading..."}
                src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                style={{ borderRadius: "3%" }}
              />
            </div>
            <div style={{ overflow: "hidden" }}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Description
              </Typography>
              <Typography id="modal-modal-title" variant="body1" component="h2">
                {overview ? overview : "Loading..."}
              </Typography>
              <Typography
                id="modal-modal-title"
                variant="subtitle1"
                component="h3"
              >
                Puntaje:
                {vote_average ? vote_average : "Loading..."}
                <Recomendations id={id} />
              </Typography>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
