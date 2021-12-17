const mongoose = require("mongoose");
const schema = mongoose.Schema;

const exerciseSchema = new schema({
    name: {type:String,required:true},
    duration: {type: Number, min:0, required: true},
    calories: {type: Number, min:0, required: true},
    type: {type: String, required: true, enum:["weight training","cardio","stretching"]}

});

module.exports = mongoose.model("exercise",exerciseSchema);