import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header.jsx'
import Axios from 'axios'


function App() {

  const [users,setUsers]=useState([]);
  
  
  useEffect(()=>{
  Axios.get("http://localhost:3002/api/usuarios").then((data)=>{
    setUsers(data.data);
    //console.log(data.data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
  },[])


  console.log(users);

  return (
    <p>hola</p>
  )

}


export default App
