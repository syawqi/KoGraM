import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:9000/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>GraphQL</h1>
      </div>
    </ApolloProvider>
  );
}

export default App;
