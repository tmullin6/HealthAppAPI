const express=require('express');
require('dotenv').config();
const mongoose = require("mongoose");

const app = express();

const mongoDB = process.env.MONGO_URI;

mongoose.connect(mongoDB,{useNewUrlParser: true, useUnifiedTopology: true});

const apiRouter = require("./routes/api");

app.use("/api",apiRouter);

app.listen(process.env.PORT,()=>{
    console.log("Server Running...");
});