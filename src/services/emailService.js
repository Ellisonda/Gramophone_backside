const nodemailer = require('nodemailer');

const transporte = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: 'avier.3@gmail.com',
        pass: 'rgek bpgs nexz tftj'
    }
})

const sendMail = async (to, subject, html) => {
    try {
        const options = {
            from: "avier.3@gmail.com",
            to: to,
            subject: subject,
            html: html
        }
        await transporte.sendMail(options);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {sendMail}

//TODO cambiar mail y hacer uno especifico d aplicacion