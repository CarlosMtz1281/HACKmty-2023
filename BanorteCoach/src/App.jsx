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
  )
}

export default App
