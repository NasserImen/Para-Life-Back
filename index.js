const express = require ('express')
// connect to database
const db = require('./database/connect')
// import database
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const userAPI = require('./routes/user')
const productAPI = require('./routes/product')
const categoryAPI = require ('./routes/category')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
app.use('/user', userAPI)
app.use ('/product' , productAPI)
app.use('/category' , categoryAPI)



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })