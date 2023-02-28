const usersRouter = require("express").Router()
const {findAllUser,findUserById} = require("../controllers/user.controller.js")
const User = require('../models/users.models');
//get all users
usersRouter.get("/",findAllUser)

//get user by id
usersRouter.get("/:id",findUserById)

module.exports = usersRouter;