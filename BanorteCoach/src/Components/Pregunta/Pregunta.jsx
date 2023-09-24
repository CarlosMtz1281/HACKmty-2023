import React, { useState } from 'react';

import style from './PreguntaStyle.js'

const Pregunta = ({ question, onNext, onPrevious, isFirstQuestion, inputType}) => {
  const [answer, setAnswer] = useState('');

  const handleNextClick = () => {
    onNext(answer);
    setAnswer('');
  };

  const handlePreviousClick = () => {
    onPrevious(answer);
    setAnswer('');
  };

  return (
    <div>
      <h2 style={style.preguntaTxt}>{question}</h2>

    { inputType === 'text' ? (
        <input
        style={style.txtInput}
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
      ) : inputType === 'dropdown' ? (
        <select  style={style.dropdown}

        value={answer} onChange={(e) => setAnswer(e.target.value)}>
          <option value="Muy Bajo">Muy Bajo</option>
          <option value="Bajo">Bajo</option>
          <option value="Medio">Medio</option>
          <option value="Alto">Alto</option>
          <option value="Muy Alto">Muy Alto</option>

        </select>
      ) : null}


  {isFirstQuestion ? (
        <button style={style.firstNextButton} onClick={handleNextClick}>Next</button>
      ) : (
        <div>
          <button style={style.backButton} onClick={handlePreviousClick}>Back</button>
          <button style={style.nextButton} onClick={handleNextClick}>Next</button>
        </div>
      )}

    </div>
  );
};

export default Pregunta;
