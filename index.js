const { ApolloServer } = require("apollo-server");
const resolvers = require("./src/gql/resolvers");
const typeDefs = require("./src/gql/schemas");
const connectDB = require("./src/config/db");

connectDB();

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
