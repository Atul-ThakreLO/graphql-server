import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import typeDefG from "./graphql/typeDef-g";
import resolversG from "./graphql/resolvers-g";

interface Context {
  token?: string;
}

dotenv.config();
const app = express();
// app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

const gqlServer = new ApolloServer({
  typeDefs: typeDefG,
  resolvers: resolversG,
});

async function startServer() {
  await gqlServer.start();

  app.use("/graphql", expressMiddleware(gqlServer));

  app.listen(process.env.PORT, () =>
    console.log(`server is running on http://localhost:${process.env.PORT}`)
  );
}

startServer();
