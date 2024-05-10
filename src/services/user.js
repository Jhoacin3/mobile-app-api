const user = require("../models/user");
const { validatedId } = require("../utils/utils");

//estos codigos se exportan a mi archivo user_controller
//funcion parea obetener el listado de usuarios
exports.getUsers = async () => {
  //operaciones realizadas
  const usersList = await user.find();
  return usersList;
};

// buscar un registro por Id
exports.getUserId = async (userId) => {
  await validatedId(userId);
  const searchId = await user.findById(userId);
  if (!searchId) {
    throw new Error("El usuario no existe en la Base de datos");
  }
  return searchId;
};
//crear un nuevo usuario
exports.createUserr = async (email, password, lastname, phone) => {
  //findone= busca un registro entre
  const emailTrue = await user.findOne({ email });
  //console.log("probando create ",email)

  if (emailTrue) {
    throw new Error("el correo no se puede repetir");
  }

  const newUser = new user({
    email,
    password,
    lastname,
    phone,
  });
  return newUser.save();
};

// pasando los nuevos registros actualizados
exports.updateUser = async (userId, newData) => {

  const { email, password, lastname, phone } = newData; // Desestructuracion de objetos.

  await validatedId(userId);
  const updateTrue = await user.findById(userId);
  //console.log("checando userid: ", updateTrue);
  if (updateTrue == null) {
    throw new Error("el usuario que deseas actualizar no existe");
  }
  // objeto newData
  //se utiliza el metodo findByIdAndUpdate para buscar y actualziar el documento
  //este recibe tres parmetros: userId, el newData y {new: true} este es para que devuelva con los nuevos datos

  const emailExistente = await user.findOne({ email: email });
  console.log("existeCorreo", emailExistente);
  if (emailExistente) {
    throw new Error(
      `El correo ${emailExistente.email} ya se encuentra registrado`
    );
  }

  const updatedUser = await user.findByIdAndUpdate(
    userId,
    {
      // asignando cada propiedad, De esta forma le estamos diciendo a Mongoose exactamente qué campos queremos actualizar con los nuevos valores provenientes de newData.
      email: email,
      password: password,
      lastname: lastname,
      phone: phone,
    },
    { new: true }
  );

  return updatedUser;
  // COMO RESUMEN: estoy usando findByIdAndUpdate para buscar el usuario por ID, construir el objeto con los campos a actualizar, y devolver el usuario actualizado.
};

exports.deleteUser = async (userId) => {
  // verificamos si el ID sea correcto, con esta funcion exportada
  await validatedId(userId);
  const idTrue = await user.findById(userId);
  console.log("probando ", idTrue);

  if (!idTrue) {
    throw new Error("el usuario ya no existe en nuestra base de datos");
  }
  //no se usa Delete, si no Remove al eliminar un dato
  const deletedUser = await user.findByIdAndRemove(userId);
  return deletedUser;
};
