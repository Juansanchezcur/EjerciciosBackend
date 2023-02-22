const axios = require("axios");

const getCart = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8080/api/carrito/63f531af6d81814f7883a47f/productos"
    );
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getCart;
