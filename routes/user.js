const express = require('express')
const router = express.Router()
const userSchema = require('../schema/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
saltRounds = 10;

router.post('/register' ,  async(req , res)=>{
    const findEmail = await userSchema.findOne({email:req.body.email})
    if(!findEmail){
        await bcrypt.hash(req.body.password , saltRounds,async (err,hash)=>{
            const user = await userSchema.create({
                email:req.body.email,
                password:hash
            });
            res.json(user)
           
        })
    }
    else{
        res.status(400).json({message : "your email is already used !"})
    }

})

router.post('/login' , async(req,res)=>{
    const userConnected = await userSchema.findOne({email:req.body.email})

    if(!userConnected){
        console.log(req.body);
        res.json({message:"Eamil not found!"})
    }

    else{
        console.log((req.body));
        bcrypt.compare(userConnected.password , req.body.password , (req,result)=>{
                const data ={
                    id : userConnected._id,
                    email : userConnected.email
                }
                const creatToken = jwt.sign(data , 'mayna' , {expiresIn : "3w"})
                res.json({user:userConnected ,token:creatToken} )
            
        })
    }
})
module.exports = router ;