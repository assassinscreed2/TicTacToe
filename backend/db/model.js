const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    user: {type: String, unique: true},
    password: String
})

const gameSchema = mongoose.Schema({
    users: [String],
    starter: String,
    winner: String,
    turn: String,
    x1: String,
    x2: String,
    x3: String,
    y1: String,
    y2: String,
    y3: String,
    z1: String,
    z2: String,
    z3: String,
    end: Boolean
})

const UserModel = mongoose.model('User',userSchema)
const GameModel = mongoose.model('Game',gameSchema)

module.exports = {UserModel,GameModel}