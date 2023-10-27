const express = require('express');
const dotenv = require('dotenv');
const app = express();
const {mongoose} = require('mongoose')
const cors = require('cors');
const bodyParser = require("body-parser");

dotenv.config();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Database connected successfully'))
    .catch((err) => console.log('Database not connected', err))

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const port = process.env.PORT;

app.listen(port, () => console.log(`Server running at port: ${port}`))