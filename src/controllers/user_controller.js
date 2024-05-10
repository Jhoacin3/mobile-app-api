const user = require("../models/user");
const userServices = require("../services/user");
// userServices
//ver todos los usuarios

// mostrar todos los usuarios
exports.getUsers = async (req, res) => {
  try {
    //OJO
    const users = await userServices.getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
};
//funcion para retornar un usuario por ID
exports.getUserId = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await userServices.getUserId(userId);
    res.status(200).json(user);
  } catch (error) {
    console.log("Error: ", error.message);
    res.status(500).json({ message: error.message });
  }
};

// crear un nuevo usuario
exports.createUser = async (req, res) => {
  const { email, password, lastname, phone } = req.body;
  console.log("object",req.body );
  try {
    
    const userData = await userServices.createUserr(
      email,
      password,
      lastname,
      phone
    );
    //AQUI SE MODIFICO, MODIFICAR EN TODO
    // res.json(users);
    res.status(200).json(userData);

  } catch (error) {
    console.log("error",error );
    // res.status(500).json({ message: "No se puede guardar el correo" });
    res.status(500).json({ message: error.message});
  }
};

//Logica de update para reemplazar los viejos registros con los nuevos
exports.updateUser = async (req, res) => {
  // se obtiene el userID de los parametros de la req= request
  // Obtengo el id del usuario y lo guardo en userId
  const userId = req.params.id; 
    // Aqui se construye un objeto updateData con los nuevos datos que provienen del body de la request= req:
  const updateData = {
    email: req.body.email,
    password: req.body.password,
    lastname: req.body.lastname,
    phone: req.body.phone,
  } //Esto mapea cada propiedad del body a su correspondiente en el objeto updateData.
  //Este objeto es el que se va a pasar al servicio para indicar qué campos actualizar y con qué datos nuevos.

  try {
    const userUpData=await userServices.updateUser(userId, updateData); // Llamo al servicio para actualizar el usuario
    // res.json(updatedUser);
    res.status(200).json(userUpData); 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//eliminar un usuario
exports.deleteUser = async (req, res) => {
  const userId = req.params.id; 
  // Obtener el id del usuario de los parámetros de la solicitud
  // console.log("reflejando id correspondiete: ", userId)

  try {
    
    await userServices.deleteUser(userId); // Llamar al servicio para eliminar el usuario
    res.json({ message: "Usuario eliminado correctamente" });
  } catch (error) {
    
    res.status(500).json({ error: error.message });
  }
};


