import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();
import noterouter from './routes/noteRoutes';


const app = express();
app.use(express.json())

app.use('/notes', noterouter)

const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log(`App running on port: ${port}`));