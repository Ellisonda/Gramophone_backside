const addMail = require('../controllers/newsletterController');
const { addUser, getAllUsers, deleteUser, getUserById, updateUser } = require('../controllers/userController');
const verifyToken = require('../middlewares/auth');
const { verifyRole } = require('../middlewares/checkRole');

const router= require('express').Router();



router.get('/', getAllUsers)
router.get('/:idUser', getUserById)
router.patch('/update/:idUser',  verifyToken, verifyRole, updateUser)
router.post('/addMail', addMail)
router.post('/addUser', verifyToken, verifyRole, addUser)
router.delete('/deleteUser/:idUser',  verifyToken, verifyRole, deleteUser)


module.exports= router;