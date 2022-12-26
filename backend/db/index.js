const mongoose = require('mongoose')

const connect = async () => {
    await mongoose.connect('mongodb+srv://ankur:ankurankur@cluster0.nlbpg.mongodb.net/TTT?retryWrites=true&w=majority',(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log("database connected")
        }
    })
}

module.exports = {
    connect
}