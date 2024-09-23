const { signUp, login, getRefreshToken } = require('../controllers/loginController');
const verifyToken = require('../middlewares/auth');

const router= require('express').Router();





router.post('/signup', signUp);
router.post('/login', login);
router.get('/getRefreshToken', verifyToken, getRefreshToken)

module.exports= router;