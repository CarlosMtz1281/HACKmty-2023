import style from './CardInversionesStyle';
import img from '../../assets/Skyline2.jpg'

import React from 'react';
// MUI IMPORTS
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';



const styleModal1 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function CardInversiones(props) {

    //MODAL SETERS
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <div style={style.cardContainer}>
            <img src={img} style={style.imgContainer}/>

            <div style={style.headerContainer}>
                <h1 style={style.mainInversion}>Banorte Plazo</h1>
                <h3 style={style.compatibilidad}>Compatibilidad 95%</h3>
            </div>

            <div style={style.footerContainer}>
                 <h3 style={style.proyeccion}>Saldo final proyectado: 23,300 $</h3>
            </div>

            <button style={style.button1} onClick={handleOpen}>Porque te recomndamos este Fondo</button>
            <button style={style.button2}>Invertir ya</button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styleModal1}>
                <h1 style={style.modalHead}>Porque este Fondo es para ti</h1>
                <p style={style.modalTxt}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta rerum minima asperiores, adipisci iusto voluptatum, molestiae quas quisquam harum temporibus officia atque architecto? Adipisci nihil voluptate harum minus suscipit consectetur!</p>
                </Box>
            </Modal>
        </div>
    )
}