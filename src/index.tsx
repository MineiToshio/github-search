import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloLink,
  concat,
} from '@apollo/client';
import UserContextProvider from './context/UserContext';
import constants from './utils/constants';
import App from './App';

const httpLink = createHttpLink({
  uri: constants.githubGraphQl,
});

const authMiddleware = new ApolloLink((operation, forward) => {
  const accessToken = localStorage.getItem(constants.localStorageKeys.accessToken);
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: `Bearer ${accessToken}`,
    },
  }));

  return forward(operation);
});

const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </ApolloProvider>,
  document.getElementById('app'),
);
