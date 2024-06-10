//import express from 'express';
const express = require('express');
//import monogoose from 'mongoose';
const mongoose = require('mongoose');

//import postRoutes from './routes/postRoutes';
const postRoutes = require('./routes/postRoutes');

//connect to monogoDB
mongoose.connect('mongodb+srv://kingsleygerent:kingsley1@cluster0.noe2uiw.mongodb.net/awesomedb?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
     console.log('Connected to MongoDB');

     const app = express(); // create express app

    const PORT = 3000;      // server port

    //middleware
    app.use(express.json()); //parse json data

//use routes
app.use('/api', postRoutes); //use postRoutes

    app.listen(PORT, () => {
        console.log(`Server is running on port http://localhost:${PORT}`); // listen for requests
        });
});