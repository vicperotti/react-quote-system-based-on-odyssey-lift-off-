import { gql } from "@apollo/client";

export const ADD_QUOTE = gql`
  mutation ADD_QUOTE($input: QuoteInput!) {
    addQuote(input: $input) {
      success
      errors {
        message
      }
    }
  }
`;

export const ADD_AUTHOR = gql`
  mutation ADD_AUTHOR($input: AuthorInput!) {
    addAuthor(input: $input) {
      success
      errors {
        message
      }
    }
  }
`;