const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cors());

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/novasweb', {
    useNewUrlParser: true
});

requireDir('./src/app/models');

//Rotas
app.use('/auth', require('./src/app/routes/auth'));
app.use('/user', require('./src/app/routes/user'));
app.use('/character', require('./src/app/routes/character'));

//Inicializando servidor
const port = process.env.PORT || 3000;

app.listen(port, (err) => {
    if(err){
        console.log('Error:', err)
    }else{
        console.log('NovasWeb-Mobile is working on port:', port)
    }
});