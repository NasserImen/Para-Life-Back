const express = require ('express')
const router = express.Router()
const productSchema = require('../schema/products')

router.post('/addproduct' , async(req,res)=>{
    const add = await productSchema.create(req.body)
    res.json(add)
})
router.get('/getproducts' , async (req,res)=>{
    const getAll = await productSchema.find()
    res.json(getAll)
})
router.get('/getbyid/:id' , async (req,res)=>{
    const getID = await productSchema.findById(req.params.id ,req.body)
    res.json(getID)
})
router.put('/updatproduct/:id' , async (req,res)=>{
    const update = await productSchema.findByIdAndUpdate(req.params.id , req.body)
    res.json(update)
})
router.delete('/deleteproduct/:id' , async (req,res)=>{
    const deleteproduct = await productSchema.findByIdAndDelete(req.params.id)
    res.json({mesaage : 'product deleted !'})
})




module.exports = router