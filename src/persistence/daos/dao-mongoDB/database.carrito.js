const mongoose = require("mongoose");
import dotenv from "dotenv";
dotenv.config();

const connectionString =
  process.env.MONGO_ATLAS || "mongodb://localhost:27017/coderhouse";

export default class MongoDB {
  static instance;

  constructor(collection, schema) {
    this.collection = mongoose.model(collection, schema);
    if (!MongoDB.instance) {
      this.initDB = mongoose.connect(connectionString);
      MongoDB.instance = this;
      console.log("Conectado a MongoDB!");
    } else {
      return MongoDB.instance;
    }
  }

  async initMongoDB() {
    return this.initDB;
  }

  newCart = async () => {
    try {
      const nuevoCarrito = {
        productos: [],
      };
      ;
      const createdCart = await this.collection.create(nuevoCarrito);
     ;
      return createdCart;
    } catch (error) {
      console.log(error);
    }
  };

  getAll = async () => {
    try {
      const docs = await this.collection.find({});
      return docs;
    } catch (error) {
      console.log(error);
    }
  };

  getById = async (id) => {
    try {
      const doc = await this.collection.find({ _id: id });
      return doc;
    } catch (error) {
      console.log(error);
    }
  };

  updatedoc = async (id, data, otraData) => {
    try {
      console.log(id, data, otraData);
      const updateddoc = await this.collection.findByIdAndUpdate(
        id,
        data,
        otraData
      );
      return updateddoc;
    } catch (error) {
      console.log(error);
    }
  };
  deletedoc = async (id) => {
    try {
      const deletedDoc = await this.collection.findByIdAndDelete(id);
      return deletedDoc;
    } catch (error) {
      console.log(error);
    }
  };
}
