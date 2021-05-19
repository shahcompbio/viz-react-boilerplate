import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

const httpLink = process.env.REACT_APP_GRAPHQL_URL || "./graphql";

// console.log(httpLink)
const link = new HttpLink({
  uri: httpLink,
  credentials: "same-origin"
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  shouldBatch: true
});

export default client;
