const product = require("../models/product_model");
const  {validatedProductId} = require('../utils/utils');


exports.getProducts = async()=>{
    const productList = await product.find();
    return productList;
};

// buscar un registro por Id
exports.getProductsId = async (productId) => {
    await validatedProductId(productId)
    const searchId = await product.findById(productId);
    if (!searchId) {
      throw new Error("El producto no existe en la Base de datos");
    }
    return searchId;
  };

  //crear un nuevo usuario
exports.createProduct = async (name, descripcion) => {
    //findone= busca un registro entre 
  const nameTrue = await product.findOne({name});
  //console.log("probando product ",nameTrue)
   
    if (nameTrue) {
      throw new Error ("el nombre del producto no se puede repetir");
    }
  
    const newProduct = new product({
        name, descripcion
    });
    return newProduct.save();
    
  };

  // pasando los nuevos registros actualizados
exports.updateProduct = async (productId, newData) => {
    await validatedProductId(productId)
    const updateTrue = await product.findOne({productId});
    if (updateTrue) {
      throw new Error ("el producto que deseas actualizar no existe");
  
    }
    
      const updatedProduct = await product.findByIdAndUpdate(productId, {
        name: newData.name, 
        descripcion: newData.descripcion
      }, {new: true});
  
      return updatedProduct;
  };

  exports.deleteProduct = async (productId) => {
    // verificamos si el ID sea correcto, con esta funcion exportada
    await validatedProductId(productId)
      const idTrue = await product.findById(productId);
      console.log("probando product ",idTrue)

      if (!idTrue) {
        throw new Error ("el producto ya no existe en nuestra base de datos");
      }
      //no se usa Delete, si no Remove al eliminar un dato
      const deletedProduct = await product.findByIdAndRemove(productId);
      return deletedProduct;
    }

    