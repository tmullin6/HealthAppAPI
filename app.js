const express=require('express');
require('dotenv').config();

const app = express();

app.get("/",(req,res)=>{
    res.send("Hello World I am Working")
})

app.listen(process.env.PORT,()=>{
    console.log("Server Running...");
});