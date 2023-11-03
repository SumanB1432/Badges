let bookModel = require("../models/bookModel");
let jwt = require("jsonwebtoken")

let createBook = async function(req,res){
    try {
        let data = req.body;
        let token = req.headers["x-api-key"];
        if(!token){
            res.send("token not given")
        }
        let decode = jwt.decode(token);

        jwt.verify(token,"suman_bera", function(err,decode){
            if(err){
                res.send(err)
            }
            else{
                // if(decode.userId==data.userId){

                // }
                return next()
            }
        })

       

        
    } catch (error) {
        if(error){
            res.status(500).send({status:false,message:error.message})
        }
        
    }
}