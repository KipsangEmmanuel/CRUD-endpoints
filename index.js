const express = require('express');
const dotenv = require('dotenv')
const authRoutes = require('./routes/noteRoute.js');
const {mongoose} = require('mongoose');

dotenv.config();


const app = express();

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Database connected successfully'))
    .catch((err) => console.log('Database not connected', err))


app.use(express.json())

app.use(express.urlencoded({ extended: false}));

app.use('/', authRoutes)

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running at port ${port}`))