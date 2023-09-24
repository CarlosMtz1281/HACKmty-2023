const express = require('express');
const db = require('./config/db')
const cors = require('cors')

const app = express();
const  PORT = 3002;
app.use(cors());
app.use(express.json())

// Subir usuarios
app.get("/api/usuarios", (req,res)=>{
db.query("SELECT * FROM usuarios", (err,result)=>{
    if(err) {
    console.log(err)
    } 
res.send(result)
});   });


// Subir portafolios
app.get("/api/portafolios", (req,res)=>{
    db.query("SELECT * FROM portafolio", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   });

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})