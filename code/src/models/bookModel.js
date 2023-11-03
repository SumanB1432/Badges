const { ObjectId } = require("bson");
let mongoose = require("mongoose");

let bookSchema = new mongoose.Schema({
    title:{
        type:String
    },
    price:{
       type : Number
    },
    userId:{
        type: ObjectId,
        ref: "User"
    }
},{timeseries:true})

module.exports = mongoose.model("Book",bookSchema)