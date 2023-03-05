import express from "express";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import { graphqlRootProds, graphqlSchemaProds } from "./services/graphql.js";

const app = express();

app.use(express.static("public"));
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchemaProds,
    rootValue: graphqlRootProds,
    graphiql: true,
  })
);

const PORT = 8080;
app.listen(PORT, () =>
  console.log(
    `Express GraphQL Server Running On http://localhost:${PORT}/graphql`
  )
);
