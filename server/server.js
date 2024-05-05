require('dotenv').config({ path: '.env.local' });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose')
const session = require('express-session')
const cors = require('cors')
const routes = require('./router')
const app = express();
const PORT = process.env.PORT;

// middlewares
app.use(cors())
app.use(bodyParser.json())

mongoose.connect(process.env.MONGO_URI, {
     
}).then(() =>{
    console.log("connected to the database successfully");
}).catch(err => {
    console.log(err.message);
})
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use('/client', routes)
app.get('/', (req, res) =>{
    res.send({message: "Welcome to our app."})
})

app.listen(PORT, () =>{
    console.log(`app running on port http://localhost:${PORT}...`);
})