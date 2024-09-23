const nodemailer = require('nodemailer');

const transporte = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: 'avier.3@gmail.com',
        pass: 'rgek bpgs nexz tftj'
    }
})

const sendMail = async (mailOptions) => {
    try {
        const options = {
            from: "avier.3@gmail.com",
            to: mailOptions.to,
            subject: mailOptions.subject,
            html: mailOptions.html
            //!Cambiar formato por el de kunva
        }
        await transporte.sendMail(options);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {sendMail}

//TODO cambiar mail y hacer uno especifico d aplicacion