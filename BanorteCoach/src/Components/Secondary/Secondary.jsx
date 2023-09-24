import style from './styles';
import React, { useState } from 'react';
import CardInversiones from '../CardInversiones/CardInversiones';


export default function Secondar({investOptions, activeButton}){
    console.log(activeButton)
    if(activeButton != 'Ver Más'){
        return null;
    }

    console.log(investOptions)
    return(
        <div style={style.wrap}>
            {investOptions.map((option) => (
          // Render CardInversiones for each option, passing it as props
          <CardInversiones
            key={option[0]}
            name={option[0]}
            percentage={option[1]}

            // Add more props as needed based on your data structure
          />
        ))}

        </div>
    )
}
