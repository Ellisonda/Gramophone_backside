const jwt = require('jsonwebtoken')

const verifyToken = (req,res, next) => {
    try {
        const token = req.header("auth-token");
        if(!token) {
            return res.stauts(400).send('Access denied');
        }
        const payload = jwt.verify(token, process.env.PASSWORD_SECRET);
        req.payload = payload;
        next();
    } catch (error) {
        try {
            const token = req.header("auth-token");
        if(!token) {
            return res.stauts(400).send('Access denied');
        }
        const payload = jwt.verify(token, process.env.PASSWORD_SECRET_REFRESH);
        req.payload = payload;
        next();
        } catch (error) {
      res.status(400).send("Expired Token");
        }
    }
}

module.exports = verifyToken;