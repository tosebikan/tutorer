import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';

const reducer = (state) => {
  return state;
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
