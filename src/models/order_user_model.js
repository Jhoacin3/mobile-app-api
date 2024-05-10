const mongoose = require('mongoose');
const schema = mongoose.Schema;

const order_userChema = new schema({
    // id_user: String,
    id_user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
      },
      id_order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'order',
        required: true
      },
    // id_order: String,
})
//AQUI EN SINGULAR Y EN LA BD PLURAL
const order_user = mongoose.model("order_user", order_userChema);
module.exports= order_user;