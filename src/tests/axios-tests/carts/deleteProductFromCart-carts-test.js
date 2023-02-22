const axios = require("axios");

const url =
  "http://localhost:8080/api/carrito/63f5339daa849ca111cbf16c/productos/6386c5f5173fdf056db67c74";

const deleteProductFromCart = async () => {
  try {
    const resp = await axios.delete(url);
    console.log(resp.data);
  } catch (err) {
    console.log(err);
  }
};

module.exports = deleteProductFromCart;
