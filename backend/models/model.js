const database = require('../database/db.config');

class Peticiones{

    async postaddUser(name, email, password){
        const respuesta = await database.query(
            `INSERT INTO Usuario (name, email, password) VALUES ($1, $2, $3);`, 
            [name, email, password]
        );
        return respuesta; 
    }

    async getAllUser(){
        const respuesta = await database.query(
            `SELECT * FROM Usuario;`
        );
        return respuesta;
    }

    async getUser(email){
        const respuesta = await database.query(
            `SELECT * FROM Usuario WHERE email=$1;`, 
            [email]
        );
        return respuesta;
    }

    async deleteUser(email){
        const respuesta = await database.query(
            `DELETE FROM Usuario WHERE email=$1;`, 
            [email]
        );
        return respuesta;
    }

    async putUpdateUser(user,name,email,password){
        const respuesta = await database.query(
            `UPDATE Usuario SET name=$1, email=$2, password=$3 WHERE email=$4;`,
            [name, email, password, user]
        );
        return respuesta;
    }   
    
    async postLogin(email, password){
        const respuesta = await database.query(
            `SELECT login($1,$2)`, 
            [email,password]
        );
        return respuesta;
    }
}

const peticion = new Peticiones();
module.exports = peticion;