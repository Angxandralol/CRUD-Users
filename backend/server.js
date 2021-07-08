//Archivo de Inicio
const express = require('Express');
const cors = require('cors');
const app = express();

//Configuracion del Servidor
app.set('port', process.env.PORT||3000);
app.set('name', 'Prueba');

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({origin:'http://localhost:4200'}));

//Rutas
app.use(require('./routes/router.js'));

//Iniciación del Servidor
app.listen(app.get('port'), (req,res) =>{
    console.log('name: ', app.get('name'));
    console.log('port', app.get('port'));
});