const mongoose = require("mongoose");

const connectionString =
  process.env.MONGO_ATLAS || "mongodb://localhost:27017/coderhouse";

const initMongoDB = async () => {
  try {
    console.log("CONECTANDO A MI DB EN MONGO");
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("YA ESTOY CONECTADO");
  } catch (error) {
    console.log(`ERROR => ${error}`);
    return error;
  }
};

module.exports = initMongoDB;
