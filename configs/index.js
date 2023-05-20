// CORS = Cross origin resource sharing - mecanismo que permite recursos restritos de uma pagina web serem pedidos de outros dominios fora dele mesmo.

const {json, urlencoded} = require('express');
const cors = require('cors');
const logger = require('morgan');


module.exports = (app) => {

    app.set('trust proxy', 1);

    const CLIENT_URL = process.env.ORIGIN || 'http://localhost:4003';

    app.use(cors({
        origin: [CLIENT_URL]
    }))

    app.use(logger('dev'))

    app.use(json()); // executar o json para ele poder receber o req.body nas requisicoes de post e de put

    app.use(urlencoded({extended: false})); // se eu passar algo além do que eu preciso ele não vai aceitar
};

