import { buildSchema } from "graphql";
import {
  getAllProducts,
  getProduct,
  addProduct,
  editProduct,
  deleteProduct,
} from "../controllers/products.controller.js";

export const graphqlSchemaProds = buildSchema(`
    type Product{
        id: String!
        name: String
        description: String
        price: Int
        img: String
    }
    type Query{
        getAllProducts:[Product]
        getProduct(id:String!):Product
    }
    input ProductInput{
        name: String!
        description: String!
        price: Int!
        img: String!
    }
    input ProductEditInput{
        name: String!
        description: String!
        price: Int!
        img: String!
    }
    type Mutation{
        addProduct(data:ProductInput):Product
        editProduct(id:String!, data:ProductEditInput):Product
        deleteProduct(id:String!):[Product]
    }
 `);

export const graphqlRootProds = {
  getAllProducts,
  getProduct,
  addProduct,
  editProduct,
  deleteProduct,
};
