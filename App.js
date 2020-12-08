import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigator/AppNavigator';
// import TabNavigator from './navigator/TabNavigator';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { TOKEN, SPACE_ID } from '@env';

console.log('token', TOKEN, SPACE_ID);

const client = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/`,
  cache: new InMemoryCache(),
  credentials: 'same-origin',
  headers: {
    Authorization: `Bearer ${TOKEN}`
  }
});

const initialState = {
  action: '',
  name: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CLOSE_MENU':
      return {
        action: 'closeMenu'
      };
    case 'OPEN_MENU':
      return {
        action: 'openMenu'
      };
    case 'UPDATE_NAME':
      return {
        ...state,
        name: action.payload
      };
    default:
      return state;
  }
};
const store = createStore(reducer);

function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
