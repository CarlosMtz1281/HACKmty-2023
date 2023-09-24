
import CardInversiones from '../CardInversiones/CardInversiones';

import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import fondosData from '../../assets/inversiones';

export default function Primary({investOptions, activeButton, meses, dinero}){
    if(activeButton != 'Resultados'){
        return null;
    }

    console.log(investOptions)
    return(
        <div>
            {investOptions.map((option) => (
          // Render CardInversiones for each option, passing it as props
          <CardInversiones
            key={option[0]}
            name={option[0]}
            percentage={option[1]}
            meses={meses}
            dinero={dinero}

            // Add more props as needed based on your data structure
          />
        ))}

        </div>
    )
}
