const mongoose = require('mongoose');
const schema = mongoose.Schema;
var product = mongoose.model('product');


const orderChema = new schema({
    // product_id: String,
    product_id: { type: schema.ObjectId, 
        ref: "product" },
        
    order_date: String,
    order_code: String,
    descripcion:String
    // product_id: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'product',
    //     required: true
    //   },
})
//AQUI EN SINGULAR Y EN LA BD PLURAL
const order = mongoose.model("order", orderChema);
module.exports= order;