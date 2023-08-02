const express = require('express');
require('dotenv').config();

const {dbConnect} = require('./helpers/connection');


// SERVIDOR
const app = express();
const port = process.env.PORT;

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())

// CONEXIÓN BASE DE DATOS
dbConnect()

// CONFIGURACIÓN CARPETA ESTÁTICA
app.use(express.static(__dirname+'/public'));//middleware <use>: función que se ejecuta antes de la solicitud al servidor. <__dirname> doble guion bajo

// RUTAS
app.use('/api/v1', require('./routers/apiRoute'));

app.listen(port, () => {
    console.log(`Servidor a la escucha del puerto ${port}`)
});