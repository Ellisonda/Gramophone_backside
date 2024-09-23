const router= require('express').Router();

const {getAllProducts, addProduct, getProductById, modifyProduct, deleteProduct}= require('../controllers/productController')


router.get('/', getAllProducts);
router.get('/:idProduct', getProductById);
router.post('/addProduct', addProduct);
router.patch('/update/:idProduct', modifyProduct);
router.delete('/:idProduct', deleteProduct);

module.exports= router;