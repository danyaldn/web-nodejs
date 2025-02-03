const express = require('express');
const app = express();

const mongoose = require('mongoose');
const debug = require('debug');
const config = require('config');
const productRouter = require('./src/routes/index');


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));



mongoose
    .connect("mongodb://localhost:27017/testproject")
    .then(() => console.log('database connected'))
    .catch(() => console.error('could not connect to database'));


app.use('/api',productRouter);
    

const port = process.env.PORT || 3000;
app.listen(port , () => console.log('listening on port : ' + port));    
