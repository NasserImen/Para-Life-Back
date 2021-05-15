const mongoose = require ('mongoose')
const schema = mongoose.Schema

const productSchema = new schema ({
    name : String,
    category : String,
    ref : Number,
    price : Number,
    stock : Number,
    makerName : String,
    category : String
})

module.exports = mongoose.model('products' , productSchema)