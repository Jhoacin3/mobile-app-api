// importando Express
const express = require('express');
const bodyParse = require('body-parser');
const mongoose = require('mongoose');

const CONFIG = require("./config/config");
const routes = require('./routes/index'); 
const routesProduct = require('./routes/index_product');
const routesOrder = require('./routes/index_order');
const orderUserRouter = require("./routes/order_user_router");

const port = 3000;// variable escuchando en el puerto 3000
const app= express();// instanciar express para obtener los metodos de express

// convertir a JSON de manera general: algo bien!
app. use(bodyParse.json());//Parseo de informacion a JSON
app.use('/api', routes)// usar el prefijo /api
app.use('/api', routesProduct)// usar el prefijo /api
app.use('/api', routesOrder)// usar el prefijo /api
app.use('/api', orderUserRouter)// usar el prefijo /api

//MONGODB Coneccion
mongoose.connect(CONFIG.MONGODB_URL)
.then(()=>console.log("You are connected to mongodb"))
.catch((error)=> console.log(error));

// conexion a la BD mongoDB
app.listen(port, async()=>{
    console.log("Listening on port 3000");
})