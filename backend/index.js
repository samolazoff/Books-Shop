import express from 'express';
import mongoose from 'mongoose';

import Passwords from '../backend/utils/password.js';

import { Book } from './models/bookModel.js';

const app = express();
const PORT_SERVER = Passwords.PORT || 5000;
const MONGODB_URL = Passwords.MONGODB_URL;

app.use(express.json());

app.get('/', (req, res) => {
    return res.status(234).send('Welcome to Books shop')
});

app.post('/books', async (req, res) => {
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

app.get('/books', async (req, res) => {
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

app.get('/books/:id', async (req, res) => {
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

app.put('/books/:id', async (req, res) => {
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

app.delete('/books/:id', async (req, res) => {
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

app.listen(PORT_SERVER, () => {

    console.log(`App listening to port: ${PORT_SERVER}`);

    mongoose
        .connect(MONGODB_URL)
        .then(
            () => {
                console.log('App connected to database');
                
        })
        .catch(
            (error) => {
                console.log(error);
        });
});
