const express = require('Express');
const ruta = express.Router();
const controlador = require('../controllers/controller');

ruta.get('/users', controlador.getAllUser);
ruta.post('/add', controlador.postAddUser);
ruta.put('/update/:email', controlador.updateUser);
ruta.delete('/users/:email', controlador.deleteUser);


//Extra

module.exports = ruta;