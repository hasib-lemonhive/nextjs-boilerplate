/**
 * Apollo has to be used differently in NextJS based on how
 * the data is being called.
 * Please @see https://www.apollographql.com/blog/apollo-client/next-js/next-js-getting-started/
 */

import { ApolloClient, InMemoryCache } from '@apollo/client';

const GRAPHQL_URI = process.env.NEXT_PUBLIC_GRAPHQL_URI;

const client = new ApolloClient({
  uri: GRAPHQL_URI,
  cache: new InMemoryCache(),
  /* credentials: 'omit',
  headers: {
    authorization: localStorage.getItem('token'),
  }, */
});

export default client;
