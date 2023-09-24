import React, { useState } from 'react';
import Pregunta from '../../Components/Pregunta/Pregunta';
import style from './StyleCoachPage.js';
import { Link } from 'react-router-dom';

export default function CoachPage() {
  const handleHomeCall = () => {
    <Link to="/LandingPage" />
  };

  const generateUser = () => {
    let user = "";
    for (let i = 0; i < 3; i++) {
      user += answers[i] + ";";
    }
    console.log("User length: " + user.length)
    return user;
  }

  // questionario
  const questions = [
    '¿Cuánto tiempo quieres invertir tu dinero?',
    '¿Cuánto dinero vas a invertir?',
    '¿Cuánto riesgo quieres para tu inversión?',
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleNext = (answer) => {
    // Actualizar la respuesta en el arreglo
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = answer;
    setAnswers(updatedAnswers);

    // Avanzar al siguiente índice de pregunta
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handlePrevious = (answer) => {
    // Actualizar la respuesta en el arreglo
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = answer;
    setAnswers(updatedAnswers);

    // Retroceder al índice anterior de pregunta
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  return (
    <div style={style.banner}>
      <div style={style.mainWrapper}>
        {currentQuestionIndex < questions.length ? (
          <Pregunta
            question={questions[currentQuestionIndex]} // Pasa una pregunta individual
            onNext={handleNext}
            onPrevious={handlePrevious}
            isFirstQuestion={currentQuestionIndex === 0}
            inputType={
              currentQuestionIndex === 2 ? 'dropdown' : 'text' // Campo de texto o menú desplegable
            }
          />
        ) : (
          <div>
            <h2 style={style.mainTittle}>Gracias por responder las preguntas:</h2>
            <ul>
              {questions.map((question, index) => (
                <li style={style.listaRespuestas} key={index}>
                  {question}: {answers[index]}
                </li>
              ))}
            </ul>
            <Link to="/LandingPage">
              <button style={style.button1} onClick={handleHomeCall}> Regresar a Menu principal</button>
            </Link>

            <Link to="/InversionesPage" onClick={() => console.log(generateUser())}>
              <button style={style.button2} >Guardar Resultados</button>
            </Link>

          </div>


        )}



      </div>
    </div>
  );
}
