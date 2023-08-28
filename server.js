const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

// Routes
app.use('/', (req, res) => {
    res.send("Hello World")
})



// Mongoose setup
const PORT = process.env.PORT   || 6000
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
    }).then(() => {
        app.listen(PORT, () => console.log(`Server Port: ${PORT}`)); 
    })
   .catch(err => {
        console.log("Error connecting to MongoDB", err)
    })