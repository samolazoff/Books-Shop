import express, { request } from 'express';

import {PORT} from './utils/config.js';

const app = express();

app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send('Welcome to Books shop')
    
})

app.listen(PORT, () => {
    console.log(`App listening to port: ${PORT}`);
    
});