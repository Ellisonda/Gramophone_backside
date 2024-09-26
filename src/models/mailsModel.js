const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const userSchema = new Schema({
    
    email: {type:String, required: true, unique: true,
        trim: true,
        minLength: 10},
    
})

const mailListModel = mongoose.model('Mail', userSchema, 'mail');

module.exports = mailListModel;