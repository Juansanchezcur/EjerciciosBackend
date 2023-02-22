const axios = require("axios");

const url = "http://localhost:8080/api/productos/63f52aaf2faf858b5818bbb7";

const deleteProduct = async () => {
  try {
    const resp = await axios.delete(url);
    console.log(resp.data);
  } catch (err) {
    console.log(err);
  }
};
module.exports = deleteProduct;
