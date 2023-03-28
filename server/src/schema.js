import gql from "graphql-tag";
export const typeDefs = gql`
  # Schema definitions go here
  "A track is a group of Modules that teaches about a specific topic"
  type Query {
    "Get quotes array for homepage grid"
    quotes: [Quote!]!
    quote(id:ID!): Quote!
    authors: [Author]
    author(id:ID!): Author!
  }
  type Quote {
  id: ID!
  quotetext: String!
  author: Author!
  source: String
}
"Author of a complete Track or a Module"
type Author {
  id: ID!
  name: String!
  photo: String
}

`;

