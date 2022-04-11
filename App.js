import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './screens/Navigator';
import StartScreen from './screens/StartScreen';
import LoginScreen from './screens/LoginScreen';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Provider } from "jotai";

const client = new ApolloClient({
  uri: 'http://129.151.198.192:4000/graphql',
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
