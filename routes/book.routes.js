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
   const {page, limit} = req.query;
    try {
        const booksFromDB = await Book.find();
        res.status(200).json(booksFromDB);
    } catch (error) {
        res.status(500).json({description: 'erro ao listar livros', error})
    }
})


router.get('/:bookId', async (req,res,next)=>{
    const {bookId} = req.params;
    try {
        const bookFromDB = await Book.findById(bookId);
        res.status(200).json(bookFromDB);
    } catch (error) {
        next(error);
    }
})



// Crud => Update, método Put, editar.

router.put('/:bookId', async(req,res,next)=> {
    const { bookId } = req.params;

    try {
        const bookFromDB = await Book.findByIdAndUpdate(bookId, req.body, {new:true});
        res.status(200).json(bookFromDB);
    } catch (error) {
        next(error);
    }
})

//Crud -> Delete;

router.delete('/:bookId', async(req,res,next)=> {
    const { bookId } = req.params;
    try {
        await Book.findByIdAndRemove(bookId);
        res.status(204).json(); // 204 = sucesso sem resposta.
    } catch (error) {
        next(error);
    }
})

//exportando rotas
module.exports = router;


