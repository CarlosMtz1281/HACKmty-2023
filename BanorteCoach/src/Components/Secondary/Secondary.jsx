
import React, { useState } from 'react';
import { styles } from './styles';


const Secondary = () => {
    // Define an array of button labels
    const buttonLabels = ['Resultados', 'Ver Más', 'Inv. Actuales', 'Preguntas'];

    // Define state to keep track of the currently pressed button
    const [activeButton, setActiveButton] = useState(null);

    // Function to handle button click
    const handleButtonClick = (buttonLabel) => {
      setActiveButton(buttonLabel);
      console.log(buttonLabel);

    };

    return(

        <div>
            {buttonLabels.map((label) => (
                <button
                key={label}
                className={`button ${label === activeButton ? 'active' : ''}`}
                onClick={() => handleButtonClick(label)}
                style={ {... styles.button,
                    ... (label === activeButton ? styles.activeButton : {}) }}
                >
                {label}
                </button>
            ))}
        </div>

    )
}

export default Secondary;