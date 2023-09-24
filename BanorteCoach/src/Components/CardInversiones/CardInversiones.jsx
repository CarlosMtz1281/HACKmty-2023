import style from "./CardInversionesStyle";

import React from "react";
// MUI IMPORTS
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import inversiones from "../../assets/inversiones";

import img1 from "../../assets/FondosImagenes/Fondo1.jpeg";
import img2 from "../../assets/FondosImagenes/Fondo2.jpeg";
import img3 from "../../assets/FondosImagenes/Fondo3.jpeg";
import img4 from "../../assets/FondosImagenes/Fondo4.jpeg";
import img5 from "../../assets/FondosImagenes/Fondo5.jpeg";
import img6 from "../../assets/FondosImagenes/Fondo6.jpeg";
import img7 from "../../assets/FondosImagenes/Fondo7.jpeg";
import img8 from "../../assets/FondosImagenes/Fondo8.jpeg";
import img9 from "../../assets/FondosImagenes/Fondo9.jpeg";
import { element } from "prop-types";

const imageMap = {
  1: img1,
  2: img2,
  3: img3,
  4: img4,
  5: img5,
  6: img6,
  7: img7,
  8: img8,
  9: img9,
};

const styleModal1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function CardInversiones(props) {
  const { name, percentage, risk } = props;

  const item = () => {
    for (let i = 0; i < inversiones.length; i++) {
      if (inversiones[i].Nombre == name.trim()) {
        return inversiones[i];
      }
    }
  };
  console.log(item());
  const elemento = item();
  let percentage2 = percentage;
  if (!percentage.includes("%")){
    percentage2 += "%";
  }
  //MODAL SETERS
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(name);
  console.log(elemento);
  console.log(elemento.key);
  return (
    <div style={style.cardContainer}>
      <img src={imageMap[elemento.key]} style={style.imgContainer} />

      <div style={style.headerContainer}>
        <h1 style={style.mainInversion}>{elemento.name}</h1>
        <h3 style={style.compatibilidad}>Compatibilidad {percentage2}</h3>
      </div>

      <div style={style.footerContainer}>
        <h3 style={style.proyeccion}>Saldo final proyectado: 23,300 $</h3>
      </div>

      <button style={style.button1} onClick={handleOpen}>
        Informacion del Fondo
      </button>
      <button style={style.button2}>Invertir ya</button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModal1}>
          <h1 style={style.modalHead}>{elemento.name}</h1>
          <p style={style.modalTxt}>{elemento.descripcion}</p>
          <button onClick={handleClose}>Regresar</button>
        </Box>
      </Modal>
    </div>
  );
}
