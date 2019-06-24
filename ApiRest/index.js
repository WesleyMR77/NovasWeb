const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//Iniciando o app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cors());

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