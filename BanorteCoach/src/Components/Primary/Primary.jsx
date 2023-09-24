
import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import fondosData from '../../assets/inversiones';

export default function Primary() {
    return(
        <div>
            {fondosData.map((fondo) => (
                <li>
                    <img src={fondo.Imagen} />
                    <h1>{fondo.Nombre}</h1>
                </li>
            ))}
        </div>
    )
}
