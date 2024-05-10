const express = require('express'); 
const userController = require('../controllers/user_controller');
// const { createUser } = require('../services/user');

//constructor que retorna un objeto
const router= express.Router();

// peticion get
router.get("/user", userController.getUsers );
//peticion get con ID
router.get("/user/:id", userController.getUserId );
//CREAR
router.post("/userC", userController.createUser );
// Ruta para actualizar un usuario existente
router.put('/userUp/:id', userController.updateUser);
// Ruta para eliminar un usuario existente
router.delete('/userD/:id', userController.deleteUser);

module.exports = router;



