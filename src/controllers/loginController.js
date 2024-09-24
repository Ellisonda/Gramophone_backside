const userModel = require('../models/userModel');
const bcrypt= require('bcrypt');
const {generateToken}= require('../utils/generateToken');
const replaceTemplateEmail = require('../utils/replaceTemplateEmail');
const { emailSignupTemplate } = require('../utils/template');
const { sendMail } = require('../services/emailService');


const login = async (req,res) => {
    try {
        const  {email, password} = req.body;
        const user= await userModel.findOne({email: email});

        if(!user) {
            return res
            .status(401)
            .json({ status: 'Failed', message: "Email & password doesn't match"})
        }

        const validPassword = await bcrypt.compare(password, user.password);

        if(!validPassword) {
            return res.status(401).json({
                status: 'Failed',
                message: "Email & password doesn't match"
            });
        }

        const payload = {
            _id: user._id,
            username: user.username,
            email: user.email,
            role: user.role
        }

        const token= generateToken(payload, false);
        const token_refresh = generateToken(payload, true);

        res.status(200).json({
            stauts:'Succeded',
            user: user, 
            token,
            token_refresh
        })
    } catch (error) {
    res.status(404).json({ status: "Failed", error: error.message });
        
    }
}



const signUp = async (req,res) => {
    try {
        const password = await bcrypt.hash(req.body.password, 10);
        const user = new userModel({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: password,
        role: req.body.role,
        //! Creo q el role aqui no tiene sentido
        //TODO pendiente d quitar
        })

        await user.save();

        const userTemplate = {
            name:user.name,
            username: user.username,
            my_company: 'Gramophone',
            company_address: 'Paseo La Farola, 15, Málaga',
            email: user.email,
            role: user.role
        }

        const subject = `Many thanks for the support to our community ${userTemplate.name}`;
        const html = replaceTemplateEmail(emailSignupTemplate, userTemplate);

        await sendMail(user.email, subject, html);
        res.status(201).json({ status: 'Succeded', user: user})
    } catch (error) {
    res.status(404).json({ status: "Failed", error: error.message });
        
    }
}


const getRefreshToken = async (req,res) => {
    try {
        if(!req.payload) {
            return res.status(401).json({
                status: "Failed",
                message: 'Acces denied'
            })
        }
        const payload = {
            _id:req.payload._id,
            username: req.payload.username,
            email: req.payload.email,
            role: req.payload.role
        }
        const token= generateToken(payload, false);
        const token_refresh= generateToken(payload, true);
        res.status(200).json({ status: 'Succeded', token, token_refresh})
    } catch (error) {
    res.status(404).json({ status: "Failed", error: error.message });
    }
}
module.exports = {login, signUp, getRefreshToken}