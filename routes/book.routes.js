/*const {Router} = require('express');
const router = Router();*/
const router = require('express').Router();

// modelo

const Book = require('../models/Book.model');

//Colocar as rotas

// Crud -> Create

router.post('/', async (req,res) => {
    const {title, description, author, rating} = req.body;
try {
    if(!title){
        const error = new Error ('titulo é obrigatório');
        error.code = 400;
        throw error;
    };
    //await Book.create(req.body);
    const newBookFromDb = await Book.create({title, description, author, rating});
    res.status(201).json(newBookFromDb);
} catch (error) {
    res.status(error.code || 500).json({error});
}
})


//Crud -> Read
router.get('/', async (req,res) => {
    try {
        const booksFromDB = await Book.find();
        res.status(200).json(booksFromDB);
    } catch (error) {
        res.status(500).json({description: 'erro ao listar livros', error})
    }
})



//exportando rotas
module.exports = router;

