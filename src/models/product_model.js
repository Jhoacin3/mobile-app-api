const mongoose = require('mongoose');
const schema = mongoose.Schema;

const productChema = new schema({
    name: String,
    descripcion:String
})
//AQUI EN SINGULAR Y EN LA BD PLURAL
const product = mongoose.model("product", productChema);
module.exports= product;