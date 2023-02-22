const axios = require("axios");

const url = "http://localhost:8080/api/carrito/63f53153eb1f31359ce3919b";

const deleteCart = async () => {
  try {
    const resp = await axios.delete(url);
    console.log(resp.data);
  } catch (err) {
    console.log(err);
  }
};
module.exports = deleteCart;
