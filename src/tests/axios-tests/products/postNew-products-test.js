const axios = require("axios");

const data = {
  name: "Auto",
  description: "Un auto",
  code: 1234,
  price: 100,
  photo: "asd",
  stock: 5,
};

const url = "http://localhost:8080/api/productos/";

const postNewProduct = async () => {
  try {
    const resp = await axios.post(url, data);
    console.log(resp.data);
  } catch (err) {
    console.log(err);
  }
};

module.exports = postNewProduct;
