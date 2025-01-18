import express, { request } from 'express';
import * as dotenv from 'dotenv';


dotenv.config();

const app = express();
const PORT_SERVER = process.env.PORT;

app.get('/', (req, res) => {
    return res.status(234).send('Welcome to Books shop')
    
})

app.listen(5555, () => {
    console.log(`App listening to port: ${PORT_SERVER}`);
    console.log(process.env.MONGODB_URL);
    
    
});
