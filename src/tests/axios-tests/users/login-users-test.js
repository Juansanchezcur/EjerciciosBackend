const axios = require("axios");

const urlLogin = "http://localhost:8080/api/usuarios/login";
const data = { username: "Juansito", password: "asd123" };
const login = async () => {
  try {
    //Log-In
    const resp = await axios.post(urlLogin, data);

    console.log(resp.data);
  } catch (err) {
    console.log(err);
  }
};
module.exports = login;
