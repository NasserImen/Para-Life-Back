const mongoose = require('mongoose')
const schema = mongoose.Schema

const makerSchema = new schema ({
    name : String,
    listOfCategirys : String
})

module.exports = mongoose.model('maker' , makerSchema)