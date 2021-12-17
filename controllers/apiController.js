const User = require("../models/user");


exports.index = function(req,res,next){
    res.send("Hello World");
}

exports.getUser= function(req,res,next){
    
    User.findById(req.params.id).exec((err,user)=>{
        if (err) {return next(err)};
        res.json(user);
    });
}