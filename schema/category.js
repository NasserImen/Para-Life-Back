const mongoose = require ('mongoose')
const schema = mongoose.Schema
const product = require ('./products')

const categorySchema = new schema ({
    name : String,
    listOfProducts : [{product:{type : mongoose.Types.ObjectId , ref: 'products'} , name : String}],
})

module.exports = mongoose.model('categorys' , categorySchema)