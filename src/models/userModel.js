const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: {type:String, required: true},
    email: {type:String, required: true, unique: true,
        trim: true,
        minLength: 10},
    username: {type:String, required: true, unique: true,
        trim: true,
        minLength: 6},
    password: {type:String, required: true,  minLength: 8},
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
      }

})

const userModel = mongoose.model('Users', userSchema, 'users');

module.exports = userModel;