const express = require("express");
const mongoose = require("mongoose");
let router  = require("./routes/route")
require("dotenv").config()
let app = express();
app.use(express.json())
mongoose.connect("mongodb+srv://Suman-1432:Suman1432@cluster0.bkkfmpr.mongodb.net/prac").then(()=>{
    console.log("MongoDB is connected")
}).catch((err)=>{
    if(err){
        console.log("Mongo db is not connected")
    }
})

app.use("/",router)

app.listen( process.env.PORT ||4000,(err)=>{
    if(!err){
        console.log(`server run on port no ${process.env.PORT}`)
    }
})