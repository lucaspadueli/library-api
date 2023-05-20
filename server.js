// é o arquivo que vai iniciar o servidor

//importa o app;

const app = require('./app');

// configurar porta

const PORT = process.env.PORT || 4003;

// ouvir a porta de conexao

app.listen(PORT, ()=> {
    console.log(`servidor rodando na porta ${PORT}`)
})