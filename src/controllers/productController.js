const productModel = require('../models/productModel')


const getAllProducts = async (req, res) => {
    try {
        const products = await productModel.find();
        console.log(products)
        if(!products.length === 0) {
            return res
            .status(200)
            .json({status: 'Succeded', message: "There's no festivals on the list"})
        }
        res.status(200).json({
            status: 'Succeded',
            products: products
        })
    } catch (error) {
        res.status(404).json({ status:'Failed', error:error.message });
    }
}

//Get product by iD

const getProductById = async (req,res) => {
    try {
        const {idProduct} = req.params;
        const product = await productModel.findById(idProduct)
        if(!idProduct) {
            return res.status(200).json({
                status: 'Succeded',
                message: "There's no products with that id"
            });
        }
        res.status(200).json({ status: 'Succeded', product: product})
    } catch (error) {
        return res.status(404).json({ status: "Failed", error: error.message });
    }
}

//Get product by music style

const getProductMyStyle = async (req, res) => {
    try {
        const {musicStyle} = req.params;
        const product = await productModel.find({ estilo_musica:musicStyle })
        if(!product.length === 0) {
            return res.status(200).json({
                status:'Succeded',
                message: "There's no festival with that music style"
            });
        }
        res.status(200).json({ status: 'Succeded', product: product})
    } catch (error) {
        return res.status(404).json({ status: "Failed", error: error.message });
        
    }
}



//Add product

const addProduct = async (req,res) => {
    try {
        const newProduct = new productModel({
            nombre: req.body.nombre,
            localidad: req.body.localidad,
            estilo_musica: req.body.estilo_musica,
            precio_entrada: req.body.precio_entrada,
            descripcion: req.body.descripcion,
            url_imagen_localidad: req.body.url_imagen_localidad
        });
        await newProduct.save();
        res.status(200).json({status: 'Succeded', newProduct: newProduct})
    } catch (error) {
        res.status(404).json({status:'Failed', error:error.message});
    }
}


//Modify product

const modifyProduct = async (req,res) => {
    try {
        const {idProduct} = req.params;
        const newParams= req.body;
        const updateProduct= await productModel.findByIdAndUpdate(idProduct, newParams, {new: true});


    if(!updateProduct) {
        return res
        .status(200)
        .json({status: 'Succeded', error: "There's no festival with that id"})
    }

    res.status(200).json({status: 'Succeded', updateProduct: updateProduct});
    } catch (error) {
        res.status(404).json({status:'Failed', error:error.message});
    }
    
}


const deleteProduct = async (req,res) => {
    try {
        const {idProduct} = req.params;
        const deleteProduct = await productModel.findByIdAndDelete(idProduct)

        res.status(200).json({ status: 'Succeded', deleteProduct: deleteProduct})
    } catch (error) {
        res.status(404).json({ status:'Failed', error:error.message });
    }
}

module.exports = {getAllProducts, getProductById, getProductMyStyle, addProduct, modifyProduct, deleteProduct}