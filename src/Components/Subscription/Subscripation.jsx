import { WebSocketLink } from '@apollo/client/link/ws';
import { split, HttpLink, ApolloClient, InMemoryCache } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';

const wsLink = new WebSocketLink({
  uri: 'ws://localhost:5000/graphql',
  options: {
    reconnect: true
  }
});
const httpLink = new HttpLink({
    uri: 'http://localhost:3000/graphql'
  });
  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wsLink,
    httpLink,
  ); 
  export default new ApolloClient({
    cache:new InMemoryCache(),
  });
