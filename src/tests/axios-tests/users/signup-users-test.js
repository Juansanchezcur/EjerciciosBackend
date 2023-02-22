const axios = require("axios");

const url = "http://localhost:8080/api/usuarios/signup";
const data = {
  username: "Juansitoxxx1",
  password: "asd123",
  telephone: "123123123123",
};
const signup = async () => {
  try {
    const resp = await axios.post(url, data);

    console.log(resp.data);
  } catch (err) {
    console.log(err);
  }
};
module.exports = signup;
