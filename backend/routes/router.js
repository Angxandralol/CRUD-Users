const express = require('Express');
const ruta = express.Router();
const controlador = require('../controllers/controller');

ruta.get('/users', controlador.getAllUser);
ruta.get('/user/:email', controlador.getUser);
ruta.post('/add', controlador.postAddUser);
ruta.put('/update/:email', controlador.updateUser);
ruta.delete('/users/:email', controlador.deleteUser);
ruta.post('/autenticar', controlador.postLogin);

//Extra

module.exports = ruta;