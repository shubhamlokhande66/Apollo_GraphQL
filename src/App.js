import React from 'react';

import { ApolloClient,ApolloProvider ,InMemoryCache} from '@apollo/client';
import Exchnagerate from "./Components/ExchangeRate"
import Queries from "./Components/Queries"
import Mutation from "./Components/Mutation"
import Subscripation from "./Components/Subscription/Subscripation"
import Fragment from "./Components/Fragment"
import Optimistic from "./Components/optimasticUI/OptimasticUI"
import {createApolloClient} from "./Components/Confi/confi"

const client=createApolloClient();

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h3>Mutation Example🚀</h3>
      </div>
      <Mutation/>
      <div>
        <h3>Queries Dog example🚀</h3>
      </div>
      <Queries/>
      <div>
        <h3>Queries Currency example🚀</h3>
      </div>
      <Exchnagerate/>
      <Subscripation/>
      <Fragment/>
      <div>
        <h3> optimistic UI🚀</h3>
      </div>
      <Optimistic/>
    </ApolloProvider>
  );
}
export default App;