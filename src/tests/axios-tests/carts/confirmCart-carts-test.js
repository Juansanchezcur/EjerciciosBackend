const axios = require("axios");

const urlLogin = "http://localhost:8080/api/usuarios/login";
const data = { username: "Juansito", password: "asd123" };
const confirmCart = async () => {
  try {
    const cart = await axios.post("http://localhost:8080/api/carrito/");
    const _id = cart.data.Carrito._id;
    //Add product to Cart
    await axios.post(
      `http://localhost:8080/api/carrito/${_id}/productos/6386c5f5173fdf056db67c74`,
      { quantity: 2 }
    );

    //Log-In
    const user = await axios.post(urlLogin, data);
    console.log(user.data);

    const resp = await axios.post(
      `http://localhost:8080/api/carrito/${_id}/confirmar`
    );
    console.log(resp.data);
  } catch (err) {
    console.log(err);
  }
};
module.exports = confirmCart;
