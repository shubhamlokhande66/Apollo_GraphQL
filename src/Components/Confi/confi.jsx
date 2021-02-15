import { ApolloClient,ApolloProvider ,InMemoryCache} from '@apollo/client';


export const createApolloClient = () => {
    return new ApolloClient({
        uri: 'https://48p1r2roz4.sse.codesandbox.io',
        cache: new InMemoryCache()
    });
}

export default createApolloClient;