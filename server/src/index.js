import { ApolloServer} from "@apollo/server";
import {startStandaloneServer } from "@apollo/server/standalone"
import {typeDefs} from "./schema.js";
import {resolvers} from "./resolvers.js";

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  const { url } = await  startStandaloneServer(server);;
    console.log(`
      🚀  Server is running!
      📭  Query at ${url}
    `);
  }

  startApolloServer();