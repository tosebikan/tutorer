import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigator/AppNavigator';

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
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
