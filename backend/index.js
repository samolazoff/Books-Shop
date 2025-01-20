import express from 'express';
import mongoose from 'mongoose';

import Passwords from '../backend/utils/password.js';


const app = express();
const PORT_SERVER = Passwords.PORT || 5000;
const MONGODB_URL = Passwords.MONGODB_URL;

mongoose
    .connect(MONGODB_URL);

app.get('/', (req, res) => {
    return res.status(234).send('Welcome to Books shop')
    
})

app.listen(PORT_SERVER, () => {
    console.log(`App listening to port: ${PORT_SERVER}`);
});
