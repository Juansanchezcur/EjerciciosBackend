const axios = require("axios");

const data = {
  name: "Auto caro",
  description: "Un auto más caro",
  code: 1234,
  price: 150,
  photo: "asd",
  stock: 1,
};

const url = "http://localhost:8080/api/productos/63f52da1f328f58b78ab74cb";

const updateProduct = async () => {
  try {
    const response = await axios.put(url, data);
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = updateProduct;
