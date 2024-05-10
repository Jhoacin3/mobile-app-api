const order = require("../models/order_model");
const product = require("../models/product_model");
const  {validatedOrderId} = require('../utils/utils');

exports.getOrders = async()=>{
    const orderList = await order.find();
    return orderList;
};

// buscar un registro por Id
exports.getOrderId = async (orderId) => {
    await validatedOrderId(orderId)
    const searchId = await order.findById(orderId);
    if (!searchId) {
      throw new Error("La orden no existe en la Base de datos");
    }
    return searchId;
  };

  //crear un nuevo usuario
  exports.createOrder = async (product_id, order_date, order_code, descripcion ) => {
    //findone= busca un registro entre

    //console.log("!!!!!!!!!!!!!!!!!!!!!",product_id)
  const productRepetido = await product.findOne({ name: product_id });

    if (productRepetido) {

      throw new Error ("El producto no existe");
    }
  
    const newOrder = new order({
        product_id, order_date, order_code, descripcion
    });
    return newOrder.save();
    
  };
   // pasando los nuevos registros actualizados
exports.updateOrder = async (orderId, product_id, order_date, order_code, descripcion) => {
  
    await validatedOrderId(orderId)
    const updateTrue = await order.findById(orderId);
    console.log("updateTrue: ",updateTrue)
    
    if (updateTrue== null) {
      throw new Error ("la orden que deseas actualizar no existe");
    }
    
    const productTrue = await product.findById(product_id);
    console.log("productTrue: ",productTrue)
    //const productExist = await product.findOne();


    if (productTrue == null) {
      throw new Error ("el producto que deseas actualizar no existe");
  
    }
    
      const updatedOrder = await order.findByIdAndUpdate(orderId, {
        product_id, order_date, order_code, descripcion
      });

      
      
      return updatedOrder;
  };

  exports.deleteOrder = async (orderId) => {
    // verificamos si el ID sea correcto, con esta funcion exportada
    await validatedOrderId(orderId)
      const idTrue = await order.findById(orderId);
    console.log("probando delete: ", idTrue)
      if (idTrue== null) {
        throw new Error ("la orden ya no existe en nuestra base de datos");
      }
      //no se usa Delete, si no Remove al eliminar un dato
      const deletedOrder = await order.findByIdAndRemove(orderId);
      return deletedOrder;
    }