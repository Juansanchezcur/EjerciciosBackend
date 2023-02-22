const axios = require("axios");

const getAllTest = async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/productos/");
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getAllTest;
