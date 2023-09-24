import style from "./CardInversionesStyle";
import { useEffect } from "react";

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

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

export default function CardInversiones(props) {
  const { name, percentage, meses, dinero } = props;

  const [percentage4, setPercentage4] = React.useState(percentage);
    console.log("datos")
  console.log(meses);
  console.log(dinero);

  const item = () => {
    for (let i = 0; i < inversiones.length; i++) {
      if (inversiones[i].Nombre == name.trim()) {
        return inversiones[i];
      }
    }
  };
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


  let taza = parseFloat(elemento.Actual.substring(0, elemento.Actual.length - 1));
  const [interest, setInterest] = React.useState(taza);



const [saldoFinal, setSaldoFinal] = React.useState(0);

  function calcularSaldo(dinero, meses, interest){
    let saldo = dinero;

    let taza2 = (taza/100)+1;


    for (let i = 0; i < meses/12; i++) {
      saldo = saldo * taza2;
    }

    saldo = parseInt(saldo);

    let saldoStr = ''+saldo;

    let contador = 0;
    for(let i = (saldoStr.length)-1; i >= 0.; i--){
        contador++;
        if(contador == 3){
            saldo = saldoStr.substring(0, i) + "," + saldoStr.substring(i, saldoStr.length);
            contador = 0;
        }
    }
    setSaldoFinal(saldo);

  };

  function rescateProcentaje(dinero, meses, interest){
    let saldo = dinero;
    let taza2 = (taza/100)+1;
    for (let i = 0; i < meses/12; i++) {
      saldo = saldo * taza2;
    }

    saldo = parseInt(saldo);
    console.log("activa");
    if(percentage2.includes("%")){
      percentage2 = percentage2.substring(0, percentage2.length - 1);
    }
    let percentage3 = parseInt(percentage2);
    console.log(percentage3);
    console.log(saldo);
    console.log(dinero);
    if(percentage3 == 0 && saldo > dinero){
      console.log("entro")
      percentage3 = percentage3+30.00;
      percentage3 = percentage3.toString();
      setPercentage4(percentage3);
  }
}

  useEffect(() => {
    // Call calcularSaldo when the component is mounted

    calcularSaldo(dinero, meses, interest);
    rescateProcentaje(dinero, meses, interest);
  }, []);
  return (

    <div style={style.cardContainer}>
      <img src={imageMap[elemento.key]} style={style.imgContainer} />

      <div style={style.headerContainer}>
        <h1 style={style.mainInversion}>{elemento.name}</h1>
        <h3 style={style.compatibilidad}>Compatibilidad {percentage4}%</h3>
      </div>

      <div style={style.footerContainer}>
        <h3 style={style.proyeccion}>Saldo final proyectado: ${saldoFinal}</h3>
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
          <h3 style={style.modalSubHead}>Tasa: {elemento.Actual}</h3>
          <p style={style.modalTxt}>{elemento.descripcion}</p>
          <button style={{color: 'white', backgroundColor: 'black'}} onClick={handleClose}>Regresar</button>
        </Box>
      </Modal>
    </div>
  );
}
