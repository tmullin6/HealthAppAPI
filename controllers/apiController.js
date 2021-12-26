const bcrypt = require("bcrypt");
const User = require("../models/user");
const Exercise = require("../models/exercise");


exports.index = function(req,res,next){
    res.send("Hello World");
}

exports.user_get= function(req,res,next){
    
    User.findById(req.params.id).exec((err,user)=>{
        if (err) {return next(err)};
        res.json(user);
    });
}

exports.login_post = function(req,res){
    res.send("Login post not implemented")
};

exports.create_user_post = function(req,res){
    res.send("Create User Post not implemented");
};

exports.update_user_info = function(req,res){
    res.send("User Info Update not implemented");
};