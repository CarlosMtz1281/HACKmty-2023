import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Gpt from "../public/backend/gptApi";

// pages
import LandingPage from "./pages/LandingPage";

function App() {
  
  const [res, setRes] = useState("Def");
  const handleButtonClick = async () => {
    try {
      const res = await Gpt("Elephant");
      console.log(res);
      setRes(JSON.stringify(res));
    } catch (error) {
      console.log(error);
    }

  }

  return (  
    <>
      <div>
        <button onClick={handleButtonClick}> Hacer request</button>
        <p>{res}</p>
      </div>
    </>
  );
}

export default App;
