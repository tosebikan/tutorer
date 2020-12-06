import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';

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
    default:
      return state;
  }
};
const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}

export default App;
