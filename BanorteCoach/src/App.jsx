import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import LandingPage from './pages/LandingPage/LandingPage.jsx'
import CoachPage from './pages/CoachPage/CoachPage';
import InversionesPage from './pages/InversionesPage/InversionesPage';

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
      <Header />
      <div className="Router">
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/LandingPage" element={<LandingPage />} />
          <Route exact path="/CoachPage" element={<CoachPage />} />
          <Route exact path="/InversionesPage" element={<InversionesPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
