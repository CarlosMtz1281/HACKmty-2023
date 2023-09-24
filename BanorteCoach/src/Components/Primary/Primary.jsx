
import CardInversiones from '../CardInversiones/CardInversiones';

import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import fondosData from '../../assets/inversiones';

export default function Primary(props){
    const { investOptions } = props;
    console.log(investOptions)
    return(
        <div>
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
