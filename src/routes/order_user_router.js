const express = require('express'); 
const orderUserController = require('../controllers/order_user_controller');
const router= express.Router();

//RUTAS PARA PRODUCTOS

// peticion get
router.get("/orderU", orderUserController.getOrderUser );

// router.get("/orderU/:id", orderUserController.createOrderUser );
//CREAR
router.post("/orderUCreate", orderUserController.createOrderUser );
// Ruta para actualizar un orden existente
router.put('/oderUserUp/:id', orderUserController.updateOrderUser);
// // Ruta para eliminar un orden existente
router.delete('/OU/:id', orderUserController.deleteOrderUser);

module.exports = router;