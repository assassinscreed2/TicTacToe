const express = require('express')
const app = express();
const cors = require('cors')
const boardRouter = require('./routes/ttt.route')
const {connect} = require('./db/index')
//parses incoming request
app.use(cors())

connect()

app.use(express.json())
//routes
app.use('/',boardRouter)

app.listen('8000',()=>{
    console.log("server is started")
})