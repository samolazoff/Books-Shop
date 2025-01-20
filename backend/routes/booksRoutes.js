import express from 'express';

import { Book } from '../models/bookModel.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {

        if (!req.body.title || !req.body.author || !req.body.publishYear){
            return res.status(400).send({message:'Send all required fields: title, author, publishYear'});
        };

        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        };

        const book = await Book.create(newBook);

        return res.status(201).send(book);
        
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message});
    };
});

router.get('/', async (req, res) => {
    try {

        const books = await Book.find({});

        return res.status(200).json({
            count: books.length,
            data: books
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message});
    }
});

router.get('/:id', async (req, res) => {
    try {

        const {id} = req.params;
        const book = await Book.findById(id);

        if(!book){
            return res.status(400).json({message: 'Book not found'})
        };

        return res.status(200).json(book);

    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message});
    }
});

router.put('/:id', async (req, res) => {
    try {

        if (!req.body.title || !req.body.author || !req.body.publishYear){
            return res.status(400).send({message:'Send all required fields: title, author, publishYear'});
        };

        const {id} = req.params;
        const updateBook = await Book.findByIdAndUpdate(id, req.body);

        if(!updateBook){
            return res.status(400).json({message: 'Book not found'})
        };

       
        return res.status(201).send({message: 'Book update successfully'});
        
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message});
    };
});

router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const deleteBook = await Book.findByIdAndDelete(id);

        if(!deleteBook){
            return res.status(400).json({message: 'Book not found'})
        };
        
        return res.status(201).send({message: 'Book delete successfully'});

    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message});
    }
});

export default router;