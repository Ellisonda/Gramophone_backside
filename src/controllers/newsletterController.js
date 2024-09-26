const mailListModel = require('../models/mailsModel')



const addMail = async (req,res) => {
    try {
        const newMail = new mailListModel({
            
            email: req.body.email,
            
        });
        await newMail.save();
        console.log('Se ha registrado  un nuevo mail en la base de datos', newMail)
        res.status(200).json({status: 'Succeded', newMail: newMail})
    } catch (error) {
        res.status(404).json({status:'Failed', error:error.message});
    }
}

module.exports= addMail