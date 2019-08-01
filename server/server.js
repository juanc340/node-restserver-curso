require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

//index de las rutas
app.use(require('./routes/index'));



mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true }, (err, res) => {
    if (err) throw new Error('hubo un erro en la conexion de la base de datos', err);

    console.log('Base de datos funcionando');

});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto', process.env.PORT);


});