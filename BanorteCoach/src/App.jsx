import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Gpt, { askInputData, giveInvestOptions, extractLastMessage} from "../public/backend/gptApi";

// pages
import LandingPage from "./pages/LandingPage";

// import { connection, getUsers } from "../public/backend/db";


function App() {
  const [res, setRes] = useState("Def");
  const [res2, setRes2] = useState("Def2");
  const [res3, setRes3] = useState("Def3");

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const users = await getUsers();
  //       console.log(users);
  //     } catch (error) {
  //       console.error("Error fetching users:", error);
  //     }
  //   }

  //   fetchData();

  //   // Don't forget to clean up if necessary (e.g., closing a database connection)
  //   connection.end();
  // }, []); 
  
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleChange2 = (event) => {
    setText2(event.target.value);
  };

  const handleChange3 = (event) => {
    setText3(event.target.value);
  };

  const handleQuestion = async () => {
    try {
      const res = await askInputData(text);
      const texto = res.choices[0];
      setRes2(texto);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInvestOptions = async () => {
    try {
      const res = await giveInvestOptions(text3);
      // const texto = res.choices[0].message.content;
      console.log(res);
      const texto = extractLastMessage(res);
      console.log(res)
      console.log(texto)
      setRes3(texto);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <h1>Pregunta de llenado de datos:</h1>
        <h2>Respuesta: </h2>
        <p>{res2}</p>

        <input type="text" value={text2} onChange={handleChange2} />
        <button onClick={handleQuestion}> Preguntar llenado</button>

        <h1>Pregunta opciones de inversion:</h1>
        <h2>Respuesta:</h2>
        <h2>{res3}</h2>
        <input type="text" value={text3} onChange={handleChange3}/>
        <button onClick={handleInvestOptions}> Llamar opciones inversion</button>

        {/* <button onClick={handleButtonClick}> Hacer request</button> */}

        <p>{res}</p>
      </div>
    </>
  );
}

export default App;
