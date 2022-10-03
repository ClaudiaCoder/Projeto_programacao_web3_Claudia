//importando modulos

const { prototype } = require("events");
const express = require("express");
const app = express();
const { PORT } = require("dotenv").config().parsed;

//Ativando middlewares
app.use(express.json());

// Rotas
const carsRouter = require("../routes/carsRouter");
app.use("/cars", carsRouter);

//inicializando a aplicacao
app.listen(PORT, console.log(` Server running at port ${PORT}`));