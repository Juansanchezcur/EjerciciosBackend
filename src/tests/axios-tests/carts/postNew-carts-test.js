const axios = require("axios");

const url = "http://localhost:8080/api/carrito/";

const postNewCart = async () => {
  try {
    const resp = await axios.post(url);
    console.log(resp.data);
  } catch (err) {
    console.log(err);
  }
};

module.exports = postNewCart;
