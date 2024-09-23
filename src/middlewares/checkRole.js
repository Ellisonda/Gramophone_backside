const jwt= require('jsonwebtoken');

const verifyRole= (req,res,next) => {
    try {
        const payload= req.payload
        if(payload.role !== 'admin') {
            return res
            .status(403)
            .json({ status: 'Failed', error: 'User must be admin to access'})
        }
        next()
    } catch (error) {
    res.status(400).send("Expired token");
    }
}

module.exports = {verifyRole};