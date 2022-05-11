const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const TrackAPI = require("./datasources/tracks-api");

async function startApolloServer(typeDefs, resolvers) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
      return {
        trackAPI: new TrackAPI(),
      };
    },
  });

  const { url, port } = await server.listen({ port: process.env.PORT || 4000 });
  console.log(`
  🚀 Server is running on port ${port}
  📭 Query at ${url}
`);
}

startApolloServer(typeDefs, resolvers);
