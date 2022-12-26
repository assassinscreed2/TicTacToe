const express = require('express')
const UserRouter = express.Router();
const {playMove,playGame,registerUser,userGames,login} = require('../controllers/ttt.controller')

UserRouter.post('/register',registerUser)
UserRouter.post('/playgame',playGame)
UserRouter.post('/home',userGames)
UserRouter.post('/move',playMove)
UserRouter.post('/login',login)


module.exports = UserRouter