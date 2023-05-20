const { connect }  = require('mongoose');

const DB_URI = process.env.MONGO_URI;

async function connectDB () {
    console.log('aguardando conexão com o banco de dados');

    try {
        if(!DB_URI){
            throw new Error ('sem endereço do banco de dados');
        }
        const x = await connect(DB_URI);
        console.log(`conectado ao banco de dados ${x.connections[0].name}`);
    } catch (error) {
        console.log('falha ao se conectar ao banco de dados', error);
        process.exit();
    }
}

connectDB();