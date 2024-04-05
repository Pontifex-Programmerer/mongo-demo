const express = require('express');
const app = express();
const mongoose = require('mongoose')
const User = require('./models/User');

app.listen(3000, startserver);

function startserver(){
    mongoose.connect("mongodb://10.12.98.77:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.3")
    .then(result => {
        console.log('Connected to DB!');
        //User.create({name:"Geir",birthyear:1979});
    })
    .catch(error => {
        console.log("MongoDB is MONGO and will not start!");
        console.log(error);
    })
}