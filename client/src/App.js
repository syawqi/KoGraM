import React from 'react';
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "@apollo/react-hooks";
// import './App.css';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import Home from './pages/home/';

const client = new ApolloClient({
    uri: 'http://localhost:9000/graphql',
});

function App() {
    return (
        <ApolloProvider client={client}>
            <CssBaseline/>
            <Container fixed>
                <Home/>
            </Container>
        </ApolloProvider>
    );
}

export default App;
