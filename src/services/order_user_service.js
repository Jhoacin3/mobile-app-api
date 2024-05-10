const order = require("../models/order_model");
const user = require("../models/user");
const order_user = require("../models/order_user_model");
const  {validatedOrderUserId} = require('../utils/utils');


exports.getOrderUser = async()=>{
    const orderUserList = await order_user.find();
    return orderUserList;
};

//crear un nuevo usuario
exports.createOrderUser = async (id_user, id_order) => {
    //findone= busca un registro entre 
  const ExistUser = await user.findById(id_user);
   
    if (ExistUser== null) {
      throw new Error ("Lo siento, el usuario no se encuentra");
    }
    const ExistOrder = await order.findById(id_order);
    //console.log("ExistOrder: ",ExistOrder)

    if (ExistOrder== null) {
        throw new Error ("Lo siento, el producto no se encuentra");
      }
    const newOrderUser = new order_user({
      id_user, id_order
    });
    return newOrderUser.save();
    
  };
  exports.updateOrderUser = async (orderUserId, id_user,id_order) => {
  
    await validatedOrderUserId(orderUserId)
    const updateTrue = await order_user.findById(orderUserId);
    if (updateTrue== null) {
      throw new Error ("El producto que deseas actualizar no existe");
  
    }
    const userTrue = await user.findById(id_user);
    if (userTrue== null) {
      throw new Error ("El usuario que deseas actualizar no existe");
  
    }
    const orderTrue = await order.findById(id_order);
    if (orderTrue== null) {
      throw new Error ("La orden que deseas actualizar no existe");
  
    }
    
      const updatedOrder = await order_user.findByIdAndUpdate(orderUserId, {
        orderUserId, id_user,id_order
      } );
  
      return updatedOrder;
  };

  exports.deleteOrderUser = async (orderUserId) => {
    
    await validatedOrderUserId(orderUserId)
      const idTrue = await order_user.findById(orderUserId);
    
      if (!idTrue) {
        throw new Error ("El producto ya no existe en nuestra base de datos");
      }
      //no se usa Delete, si no Remove al eliminar un dato
      const deletedOrder = await order_user.findByIdAndRemove(orderUserId);
      return deletedOrder;
    }