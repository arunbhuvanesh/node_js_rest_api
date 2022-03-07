import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/user.js';
// const express=require('express');
/* const n=require("./absr");
console.log("absr");
n.ab("arun sivaranjani");
console.log(n.txt); */
const app=express();
const PORT=5000;
app.use(bodyParser.json());

app.use("/users",userRoutes);
app.get("/",(req,res)=>res.send("Index page call"));
app.listen(PORT,()=>console.log(`Running server ${PORT}`));