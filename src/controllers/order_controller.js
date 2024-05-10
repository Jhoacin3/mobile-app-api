const order = require("../models/order_model")
const OrderServices = require("../services/order_service");

exports.getOrders = async (req, res) => {
    try {
      
      const orders = await OrderServices.getOrders();
      res.json(orders);

    } catch (error) {
      res.status(500).json({ error: "Error al obtener las ordenes" });
    }
  };

  //funcion para retornar un producto por ID
exports.getOrderId = async (req, res) => {
    const orderId = req.params.id;
    try {
      const order = await OrderServices.getOrderId(orderId);
      res.status(200).json(order);
    } catch (error) {
      console.log("Error: ", error.message);
      res.status(500).json({ message: error.message });
    }
  };

  // crear un nuevo usuario
  exports.createOrder = async (req, res) => {
    const { product_id, order_date, order_code, descripcion } = req.body;
  
    try {
      
      const orderData=await OrderServices.createOrder(
        product_id, order_date, order_code, descripcion
      );
      res.status(200).json(orderData);
  
    } catch (error) {
      // res.status(500).json({ message: "No se puede guardar el correo" });
      res.status(500).json({ message: error.message});
    }
  };
 //Logica de update para reemplazar los viejos registros con los nuevos
 exports.updateOrder = async (req, res) => {
    const orderId = req.params.id; 
    // const updateData = {
        
    //     product_id: req.body.product_id,
    //     order_date: req.body.order_date,
    //     order_code: req.body.order_code,
    //     descripcion: req.body.descripcion
    // } 
    const { product_id, order_date, order_code, descripcion } = req.body;
    console.log("re.body: ", req.body)

  
    try {
      const orderUpData=await OrderServices.updateOrder(orderId, product_id, order_date, order_code, descripcion); // Llamo al servicio para actualizar el usuario
      // res.json(updatedUser);
      res.status(200).json(orderUpData); 
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  //eliminar un usuario
exports.deleteOrder = async (req, res) => {
    const orderId = req.params.id; 
    
    try {
      
      await OrderServices.deleteOrder(orderId); // Llamar al servicio para eliminar el usuario
      res.json({ message: "orden eliminado correctamente" });
    } catch (error) {
      
      res.status(500).json({ error: error.message });
    }
  };
