const product = require("../models/product_model")
const productServices = require("../services/product_service");

exports.getProducts = async (req, res) => {
    try {
      
      const products = await productServices.getProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener los productos" });
    }
  };

  //funcion para retornar un producto por ID
exports.getProductsId = async (req, res) => {
    const productId = req.params.id;
    try {
      const product = await productServices.getProductsId(productId);
      res.status(200).json(product);
    } catch (error) {
      console.log("Error: ", error.message);
      res.status(500).json({ message: error.message });
    }
  };

  // crear un nuevo producto
exports.createProduct = async (req, res) => {
    const { name, descripcion } = req.body;
  
    try {
      
     const productData = await productServices.createProduct(
        name, descripcion 
      );
      // res.json(users);
      res.status(200).json(productData);
  
    } catch (error) {
      // res.status(500).json({ message: "No se puede guardar el correo" });
      res.status(500).json({ message: error.message});
    }
  };
  //Logica de update para reemplazar los viejos registros con los nuevos
exports.updateProduct = async (req, res) => {
    // se obtiene el userID de los parametros de la req= request
    // Obtengo el id del usuario y lo guardo en userId
    const productId = req.params.id; 
      // Aqui see construye un objeto updateData con los nuevos datos que provienen del body de la request= req:
    const updateData = {
        name: req.body.name,
        descripcion: req.body.descripcion
    } 
  
    try {
      const productUpData=await productServices.updateProduct(productId, updateData); // Llamo al servicio para actualizar el usuario
      // res.json(updatedUser);
      res.status(200).json(productUpData); 
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  //eliminar un usuario
exports.deleteProduct = async (req, res) => {
    const productId = req.params.id; 
    
    try {
      
      await productServices.deleteProduct(productId); // Llamar al servicio para eliminar el usuario
      res.json({ message: "Producto eliminado correctamente" });
    } catch (error) {
      console.log("ErrorProduct", error);
      res.status(500).json({ error: error.message });
    }
  };
