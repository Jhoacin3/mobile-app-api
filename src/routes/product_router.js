const express = require('express'); 
const productController = require('../controllers/product_controller');
//constructor que retorna un objeto
const router= express.Router();

//RUTAS PARA PRODUCTOS

// peticion get
router.get("/products", productController.getProducts );
//peticion get con ID
router.get("/product/:id", productController.getProductsId );
//CREAR
router.post("/productC", productController.createProduct );
router.put('/ProductUp/:id', productController.updateProduct);
router.delete('/productD/:id', productController.deleteProduct);

module.exports = router;

