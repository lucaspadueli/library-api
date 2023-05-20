// o app.js tem a configuracao da aplicacao api

// pacotes

require('dotenv/config');
const express = require('express');

const app = express();

//configuracoes
require('./db');
//middlewares gerais

//rotas

//gerenciamentos de erros
app.use((req,res)=> {
res.status(404).json('nao encontrado')

} )
//exportar app

module.exports = app;