const express = require('express'); 
const orderController = require('../controllers/order_controller');
const router= express.Router();

//RUTAS PARA PRODUCTOS

// peticion get
router.get("/order", orderController.getOrders );

router.get("/order/:id", orderController.getOrderId );
//CREAR
router.post("/orderC", orderController.createOrder );
// Ruta para actualizar un orden existente
router.put('/orderUp/:id', orderController.updateOrder);
// Ruta para eliminar un orden existente
router.delete('/ordenD/:id', orderController.deleteOrder);

module.exports = router;

