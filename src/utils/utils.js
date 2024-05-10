const bson = require('bson');

// NOTA: Funciones para exportar (buena practica)!

//funcion para validar ID
exports.validatedId =async(userId) => {
    // verificamos si el ID sea correcto, esto devuelve un booleano
    //libreria BSON = INVESTIGAR
  const isValidId = bson.ObjectID.isValid(userId);
  if (!isValidId) {
    throw new Error('El formato del ID es incorrecto');
  }
};
//funcion para validar ID
exports.validatedProductId =async(productId) => {
  // verificamos si el ID sea correcto, esto devuelve un booleano
  //libreria BSON = INVESTIGAR
const isValidId = bson.ObjectID.isValid(productId);
if (!isValidId) {
  throw new Error('El formato del ID es incorrecto');
}
};
exports.validatedOrderId =async(orderId) => {
  // verificamos si el ID sea correcto, esto devuelve un booleano
  //libreria BSON = INVESTIGAR
const isValidId = bson.ObjectID.isValid(orderId);
if (!isValidId) {
  throw new Error('El formato del ID es incorrecto');
}
};
exports.validatedOrderUserId =async(orderUserId) => {
  // verificamos si el ID sea correcto, esto devuelve un booleano
  //libreria BSON = INVESTIGAR
const isValidId = bson.ObjectID.isValid(orderUserId);
if (!isValidId) {
  throw new Error('El formato del ID es incorrecto');
}
};