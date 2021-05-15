const express = require ('express')
const router = express.Router()
const categorySchema = require ('../schema/category')
const product = require('../schema/products')

router.post('/add' , async (req,res)=>{
    const add =  (await categorySchema.create(req.body)).populate('listOfProducts')
    console.log(req.body.listOfProducts);
    res.json(add)
})
router.get('/allcategorys' , async (req,res) =>{
    console.log(req.body);
    const allCategorys = await categorySchema.find().populate('listOfProducts')
    res.json(allCategorys)
})



module.exports =router