const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    tracksForHome: [Track!]!
    track(id: ID!): Track
  }

  type Mutation {
    incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
  }

  type IncrementTrackViewsResponse {
    code: Int!
    success: Boolean!
    message: String!
    track: Track
  }

  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    url: String
    length: Int @deprecated(reason: "use durationInSeconds")
    durationInSeconds: Int
    modulesCount: Int
    description: String
    numberOfViews: Int
    modules: [Module!]!
  }

  type Author {
    id: ID!
    name: String!
    photo: String
  }

  type Module {
    id: ID!
    title: String!
    length: Int @deprecated(reason: "use durationInSeconds")
    durationInSeconds: Int
  }
`;

module.exports = typeDefs;
