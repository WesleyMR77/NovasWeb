const mongoose = require('mongoose');

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/novasweb', {
    useCreateIndex: true,
    useNewUrlParser: true
});

mongoose.connection.on('connected', () => {
	console.log('Connected to Database.');
});

mongoose.connection.on('error', (err) => {
	console.log('Connection Error:' + err);
});

mongoose.connection.on('disconnect',() => {
	console.log('Disconnected from Database.');
});

module.exports = mongoose;