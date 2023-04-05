import gql from "graphql-tag";
export const typeDefs = gql`
  # Schema definitions go here
  "A quote is a bit of wisdom"
  type Query {
    "Get quotes array for homepage grid"
    quotes: [Quote!]!
    quote(id:ID!): Quote!
    authors: [Author]
    author(id:ID!): Author!
  }

  type Error {
    message:String
    path:String
  }

  type BaseResponse {
    success:String
    Errors:[Error]
   }

  type Quote {
  id: ID!
  quotetext: String!
  author: Author
  source: String
}
input AuthorInput {
  name: String
  photo: String
}

input QuoteInput {
  quotetext: String!
  author: AuthorInput
  source: String
 }

"Author of a complete Track or a Module"
type Author {
  id: ID!
  name: String!
  photo: String
}

type Mutation {
  addQuote(input: QuoteInput!): BaseResponse
  addAuthor(input: AuthorInput!): BaseResponse
 }


`;
