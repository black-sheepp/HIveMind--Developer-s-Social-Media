const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    phone:{
        type: String,
        min: 10,
        max: 10,
        required: true,
    },
    password:{
        type: String,
        required: true,
        min: 6
    },
    jobProfile:{
        type: String,
        required: true,
    },
    companyName:{
        type: String,
        required: true,
    },
    skills:{
        type: String,
        required: true,
    },
    linkedIn:{
        type: String,
        required: true,
    },
    gitHub:{
        type: String,
        required: true,
    },
},{
    timestamps: true
})

const User = mongoose.model("User", userSchema);
module.exports = User;