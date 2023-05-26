// o app.js tem a configuracao da aplicacao api

// pacotes

require('dotenv/config');
const express = require('express');

const app = express();

//configuracoes
require('./db');
require('./configs')(app);
//middlewares gerais

//rotas
const bookRoutes = require('./routes/book.routes');
app.use('/books', bookRoutes);

const userRoutes = require('./routes/user.routes');
app.use('/user', userRoutes);
//gerenciamentos de erros

/*app.use((req,res)=> {
res.status(404).json('nao encontrado')
} )*/

require('./error-handling')(app);

//exportar app

module.exports = app;