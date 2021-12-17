const express=require('express');
require('dotenv').config();

const app = express();

const apiRouter = require("./routes/api");

app.use("/api",apiRouter);

app.listen(process.env.PORT,()=>{
    console.log("Server Running...");
});