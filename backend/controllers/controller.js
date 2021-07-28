const peticiones = require('../models/model'), 
      jwt = require('jsonwebtoken'), 
      express = require('express'),
      config = require('../config/config'), 
      app = express();

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

    getUser = async(req,res) => {
        const email = req.params.email;
        const respuesta = await peticiones.getUser(email);
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

    postLogin = async(req,res) => {
        const email = req.body.email;
        const password = req.body.password;
        const respuesta = await peticiones.postLogin(email,password);
        const objecto = respuesta.rows;
        const object2 = objecto[0];
        const login = object2['login'];
        if (login==true) {
            app.set('llave', config.llave);
            const payload = {
                check:true
            };
            const token = jwt.sign(payload, app.get('llave'), {
                expiresIn:1440
            });
            res.json({
                mensaje: 'Autenticación Correcta', 
                token: token
            });
            return token;
        } else {
            res.json({
                mensaje: "Usuario o contraseña incorrectos"
            })
        }
    }
}

const controlador = new Controlador();
module.exports = controlador; 