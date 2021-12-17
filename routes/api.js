const express = require('express');
const api = express.Router();

const apiController = require("../controllers/apiController");

api.get("/",apiController.index);

api.get("/user/:id",apiController.getUser);

module.exports=api;