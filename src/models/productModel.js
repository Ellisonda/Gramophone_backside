const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const productSchema = new Schema({
    nombre: {type:String, required: true},
    localidad: {type:String, required: true},
    estilo_musica: {type:String, required: true},
    precio_entrada: {type:Number, required: true},
    descripcion: {type:String, required: true},
    url_imagen_localidad: {type:String, required: true}

})

const productModel = mongoose.model('Products', productSchema, 'products');

module.exports = productModel;