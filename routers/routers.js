const express = require('express');
const myController = require('./../controller/myController.js');
const myRouter = express.Router();

myRouter.route('/login').get(myController.login)


module.exports = myRouter;