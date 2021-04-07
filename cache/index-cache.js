const express = require('express');
const bodyParse = require('body-parser');
const config = require('../config');
const router = require('./network');

const app = express();

app.use(bodyParse.json());

app.use('/', router);

app.listen(config.cache.port, () => {
  console.log(`Servicio de cache escuchando en el puerto ${config.cache.port}`)
})
