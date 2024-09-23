const express = require('express')
const productRouter= require('./src/routes/productRouter')
const userRouter= require('./src/routes/userRouter')
const loginRouter = require('./src/routes/loginRouter')
const cors = require('cors')
require('dotenv').config();
const mongoose = require('mongoose');

const app= express()

app.use(express.json())
app.use(cors())

//Mongo connections
const url_mongodb= process.env.DATA_URL_MONGO;
mongoose.connect(url_mongodb);
const db= mongoose.connection;

db.on("error", (error) => {
    console.log("Error conection with mongo");
  });
  
  db.on("connected", () => {
    console.log("Mongo is connected");
  });
  db.on("disconected", () => {
    console.log("Mongo is disconnected");
  });
//
app.use('/products', productRouter)
app.use('/user', userRouter)
app.use('/login', loginRouter)


const PORT = process.env.PORT || 3002

app.listen(PORT, ()=> {
    console.log(`Server working on port ${PORT}`)
})

module.exports = app;
