let userModel = require("../models/userModdle");
let jwt = require("jsonwebtoken");

let register = async function (req,res){
    try {
        let data = req.body;
        let createUsr = await userModel.create(data)
        if(createUsr){
            let token = jwt.sign({
                user:data.name,
                userId : data.email,
                password : data.password
            },"suman_bera")
            res.status(201).send({status:"true",message:{createUsr,token}})
        }
        else{
            res.status(400).send({statu:"true",message:"Not created"})
        }
    } catch (error) {
        if(error){
            res.status(500).send({status:false,message:error.message})
        }
        
    }
}

module.exports = {register}