const mongoose = require('mongoose');
//schema define la estructura y las restricciones de los datos que se almacenarán
const schema = mongoose.Schema;

const userChema = new schema({
    email: String,
    password: String,
    lastname: String,
    phone:String
})
//AQUI EN SINGULAR Y EN LA BD PLURAL
const user = mongoose.model("user", userChema);
module.exports= user;
