const { ApolloServer, PubSub } = require("apollo-server");
const mongoose = require("mongoose");

const { MONGODB } = require("./config");
const resolvers = require("./graphql/resolvers");
const typeDefs = require("./graphql/typeDefs");
const checkAuthSubscription = require("./util/check-auth-mutation");
const pubsub = new PubSub();
const {
  RajaOngkirApi,
} = require("./graphql/resolvers/datasource/RajaOngkirApi");

const PORT = process.env.port || 3000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
      return {
        rajaOngkirApi: new RajaOngkirApi()
      }
  },
  context: (context) => {
    const user = checkAuthSubscription(context);
    const req = context.req;
    return { req, pubsub, user };
  },
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true }, { useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB Connected");
    return server.listen();
  })
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  })
  .catch((err) => {
    console.err(err);
  });
