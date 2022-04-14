import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './screens/Navigator';
import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink, from, HttpLink } from '@apollo/client';
import { setContext } from "@apollo/client/link/context";
import { onError } from '@apollo/client/link/error';
import { Provider } from "jotai";
import { loadUser } from "./src/hooks/useUser";

const authLink = setContext( async ({ headers }) => ({ headers: {
  authorization: (await loadUser())?.token ?? '', 
  ...headers
}}));
const errorLink = onError(({ graphQLErrors, networkError, forward, operation }) => {
  if (graphQLErrors) {
    console.log(graphQLErrors)
  }
  if (networkError) {
    console.log(networkError)
  }
  forward(operation)
})

const httpLink = new HttpLink({
  uri: 'http://129.151.198.192:4000/graphql',
})

const client = new ApolloClient({
  link: from([authLink, errorLink, httpLink]),
  cache: new InMemoryCache()
});


export default function App() {
  return (
    <View style={styles.container}>
        <ApolloProvider client={client}>
      <Provider>
        <Navigator />
      </Provider>
      </ApolloProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
});
