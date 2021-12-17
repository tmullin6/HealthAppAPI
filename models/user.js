const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
    username: {type: String, minlength:1, required: true},
    password: {type: String, minLength:1, required: true},
    name: {type: String, required: true},
    age: {type: Number, min:0, max: 100, required:true},
    height: {type: Number, min:0, required: true},
    weight: {type: Number, min:0, required: true},
    calories: {type: Number, required: true, default: 2000}
});

module.exports = mongoose.model("user",userSchema);