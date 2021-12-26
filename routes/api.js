const express = require('express');
const api = express.Router();

const apiController = require("../controllers/apiController");

api.get("/",apiController.index);

api.get("/user/:id",apiController.getUser);

api.post("/login",apiController.login_post);

api.post("/signup",apiController.create_user_post);

api.put("/user/:id",apiController.update_user_info);

module.exports=api;