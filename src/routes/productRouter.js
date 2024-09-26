const router= require('express').Router();

const verifyToken = require('../middlewares/auth');
const { verifyRole } = require('../middlewares/checkRole');
const {getAllProducts, addProduct, getProductById, modifyProduct, deleteProduct, getProductMyStyle}= require('../controllers/productController')


router.get('/', getAllProducts);
router.get('/:idProduct', getProductById);
router.get('/musicStyle/:musicStyle', getProductMyStyle);
router.post('/addProduct', verifyToken, verifyRole, addProduct);

router.patch('/update/:idProduct', verifyToken, verifyRole, modifyProduct);
router.delete('/:idProduct', verifyToken, verifyRole, deleteProduct);

module.exports= router;