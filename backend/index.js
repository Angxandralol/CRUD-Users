const express = require('express'),
      bodyParser = require('body-parser'),
      jwt = require('jsonwebtoken'),
      config = require('./config/config'),
      cors = require('cors'),
      app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:4200'}));

app.listen(3000,()=>{
    console.log('Servidor iniciado en el puerto 3000') 
});

app.use(require('./routes/router.js'));

app.get('/', function(req, res) {
    res.send('Inicio');
});
