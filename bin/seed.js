// pacotes 
require('dotenv/config');
const mongoose = require('mongoose');
// nao vamos precisar do express aqui nesse arquivo pois ele nao é um servidor, é só um arquivo que vai se conectar com o banco preencher os dados e fechar a conexao.

// modelos

const Book = require('../models/Book.model');

//dados

const data = require('./books-data.json');

// configurações do banco de dados
const DB_URI = process.env.MONGO_URI;

const connectDB = async () => {
    console.log('aguardando conexão com o banco de dados');

    try {
        const x = await mongoose.connect(DB_URI);
        console.log(`conectado ao banco de dados ${x.connections[0].name}`);
    } catch (error) {
        console.log('falha ao se conectar ao banco de dados', error);
        process.exit();
    }
}


const createBooks = async () => {
    console.log('inserindo informacoes no banco de dados...');
    try {
        const booksFromDB = await Book.create(data);
        console.log(`foram criados ${booksFromDB} no banco de dados!`)
    } catch (error) {
        console.log(`falha ao inserir os livros no banco de dados!`)
    }
}

const seed = async () => {
    try {
        await connectDB();
        await Book.collection.drop();
        await createBooks();
        mongoose.connection.close();
        console.log('conexão encerrada')
    } catch (error) {
        console.error('erro ao executar o script', error);
    }
}

seed();