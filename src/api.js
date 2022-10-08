//Requisitos.
const express = require('express');
const mongoose = require('mongoose');
const { application } = require('express');

const user = require('./user.handler');

//Configuración del servidor.
const app = express();
const port = 3000;

app.use(express.json()); // <-- Convertir json.
mongoose.connect('mongodb+srv://hozlucas:hozlucasPassword@myapp.9utknbt.mongodb.net/api-db?retryWrites=true&w=majority'); // <-- Base de datos.

//Peticiones.
app.get('/api/', user.list);
app.post('/api/', user.create);
app.get('/api/:id', user.get);
app.put('/api/:id', user.update);
app.delete('/api/:id', user.delete);

//Salida al abrir servidor.
app.listen(port, () => {
	console.log(`El ejemplo se esta ejecutando en el puerto ${port}`);
	console.log('Run in: http://localhost:3000/api');
});
