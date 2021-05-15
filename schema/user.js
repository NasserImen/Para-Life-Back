const mongoose = require('mongoose')
const schema = mongoose.Schema

const userSchema = new schema ({
    firstname : String,
    lastname : String,
    adresse:String,
    email : String,
    phonenumber : Number,
    password : String,
    country : String,
    postalCode : Number
})
module.exports = mongoose.model('user', userSchema)