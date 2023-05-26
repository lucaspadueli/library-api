const router = require('express').Router();

const User = require('../models/User.model');

// Create

router.post('/', async(req,res,next)=> {
    const {username} = req.body;
    try {
        await User.create({
            username,            
        })
        res.status(201).json("Usuário criado com sucesso");
    } catch (error) {
        next(error);
    }
})


// Get all

router.get('/', async (req,res,next) => {
    try {
        const allUsers = await User.find();
        res.status(200).json(allUsers);
    } catch (error) {
        next(error)
    }
})

// Get one

router.get('/:userId', async(req,res,next) => {
    const {userId} = req.params;
    
    try {
        const singleUser = await User.findById(userId,{createdAt:0, updatedAt:0, __v:0}).populate('books');
        res.status(200).json(singleUser);
    } catch (error) {
        next(error)
    }

   
})


//adicionar livro ao usuário

router.post('/:userId/add-book/:bookId', async(req,res,next)=> {
    const {userId,bookId} = req.params;
    try {
        const userFromDb = await User.findByIdAndUpdate(userId, {$push: {books: bookId}}, {new:true});
        res.status(200).json(userFromDb);
    } catch (error) {
        next(error);
    }
})





module.exports = router;


