import React, { useState } from "react";
import { itemInterface } from "../interfaces/itemInterface";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

export const ViewItem = (itemProps: itemInterface) => {
  const { name, title, poster_path, vote_average, overview } = itemProps;

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    height: 510,
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,
    p: 4,
    color: "paper",
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="content">
      <button className="btn-items" onClick={handleOpen}>
        <section>
          <img
            alt={name}
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          />
        </section>

        <h3 className="txt">{name ?? title}</h3>
        <h3 className="txt">Puntaje: {vote_average}</h3>
      </button>
      <Modal
        open={open}
        onClose={handleClose}
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
              />
            </div>
            <div style={{ overflow: "scroll-y" }}>
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
              </Typography>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
