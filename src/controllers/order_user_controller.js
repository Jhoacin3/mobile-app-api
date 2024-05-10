const order_user = require("../models/order_user_model");
const userOrderServices = require("../services/order_user_service");
const  {validatedOrderUserId} = require('../utils/utils');


exports.getOrderUser = async (req, res) => {
    try {
      
      const orderUser = await userOrderServices.getOrderUser();
      res.json(orderUser);

    } catch (error) {
      res.status(500).json({ error: "Error al obtener las ordenes" });
    }
  };

    // crear un nuevo usuario
    exports.createOrderUser = async (req, res) => {
        const { id_user, id_order } = req.body;
      
        try {
          
          const orderUserData= await userOrderServices.createOrderUser(
            id_user, id_order
          );
          res.status(200).json(orderUserData);
      
        } catch (error) {
          // res.status(500).json({ message: "No se puede guardar el correo" });
          res.status(500).json({ message: error.message});
        }
      };
      
      exports.updateOrderUser = async (req, res) => {
        const orderUserId = req.params.id; 
        // const updateData = {
            
        //     id_user: req.body.id_user,
        //     id_order: req.body.id_order
        // } 
      const {id_user,id_order} = req.body;
      console.log("req.body de ORDER USER:", req.body);
        try {
          const productUserUpData=await userOrderServices.updateOrderUser(orderUserId, id_user,id_order); // Llamo al servicio para actualizar el usuario
          // res.json(updatedUser);
          res.status(200).json(productUserUpData); 
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      };
        //eliminar un usuario
exports.deleteOrderUser = async (req, res) => {
  const orderUserId = req.params.id; 
  
  try {
    
    await userOrderServices.deleteOrderUser(orderUserId); // Llamar al servicio para eliminar el usuario
    res.json({ message: "orden eliminado correctamente" });
  } catch (error) {
    
    res.status(500).json({ error: error.message });
  }
};