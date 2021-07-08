const peticiones = require('../models/model');

class Controlador{

    postAddUser = async(req, res) => {
        const { name,email,password } = req.body;
        const respuesta = await peticiones.postaddUser(name,email,password);
        res.json(respuesta.rows); 
    }

    getAllUser = async(req, res) => {
        const respuesta = await peticiones.getAllUser();
        res.json(respuesta.rows);
    }

    deleteUser = async(req, res) => {
        const email = req.params.email;
        const respuesta = await peticiones.deleteUser(email);
        res.json(respuesta.rows);
    }

    updateUser = async(req, res) => {
        const user = req.params.email;
        const { name, email, password } = req.body;
        const respuesta = await peticiones.putUpdateUser(user,name,email,password);
        res.json(respuesta.rows);
    }


}

const controlador = new Controlador();
module.exports = controlador; 