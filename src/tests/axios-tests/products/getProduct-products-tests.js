const axios = require("axios");

const getProduct = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8080/api/productos/63ebea3ba746023771690553"
    );
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getProduct;
