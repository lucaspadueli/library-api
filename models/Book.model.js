const { Schema, model } = require('mongoose');

const bookSchema = new Schema({
    title: String,
    description: String,
    author: String,
    rating: Number
}, {timestamps: true}); // vai adicionar o created at, updated at e um __v que é versão;

module.exports = model('Book', bookSchema);




