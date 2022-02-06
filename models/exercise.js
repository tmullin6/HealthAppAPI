const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    name: {type:String,required:true},
    duration: {type: Number, min:0, required: true},
    calories: {type: Number, min:0, required: true},
    type: {type: String, required: true, enum:["weight training","cardio","stretching"]}

});

module.exports = mongoose.model("exercise",exerciseSchema);