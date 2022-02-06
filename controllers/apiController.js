const User = require("../models/user");
const Exercise = require("../models/exercise");


exports.index = function(req,res,next){
    res.send("Hello World");
}

exports.user_get= function(req,res,next){
   res.send("USER GET NOT IMPLEMENTED")
}

exports.login_post = function(req,res){
    res.send("Login post not implemented")
};

exports.create_user_post = function(req,res,next){

    console.log(req);
    const newUser = new User ({
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstName,
        lastname: req.body.lastName,
        age: req.body.age,
        height: req.body.height,
        weight: req.body.weight 
    });

    if(err) return next(err);
    console.log(newUser);
};

exports.update_user_info = function(req,res){
    res.send("User Info Update not implemented");
};