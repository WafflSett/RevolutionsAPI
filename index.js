require('dotenv').config();
const PORT = process.env.PORT | 3000;
const dbString = process.env.DATABASE_URL;

const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect(dbString);
const database = mongoose.connection;
database.on('error', (e)=>{
    console.log(e);
})
database.on('connected', ()=>{
    console.log('Database connected!');
})

const express = require('express');
const app = express();
const revolutionsRouter = require('./routes/revolutionsRouter');
const countriesRouter = require('./routes/countriesRouter');
app.use(express.json());
app.use('/api/revolutions', revolutionsRouter);
app.use('/api/countries', countriesRouter);

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}...`);
})