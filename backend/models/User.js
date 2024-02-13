const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        min:3,
        max:20,
        unique: true
    },
    email:{
        type: String,
        require:true,
        unique: true,
        max:50
    },
    password:{
        type: String,
        required: true,
        min:3
    } 
},{timestamps: true});

module.exports = mongoose.model("User", UserSchema );