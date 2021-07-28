import React from 'react';
import { Provider } from 'react-redux';

import TabNavigator from './routes/TabNavigator';

import store from './redux/store';

const App = () => (
  <Provider store={store}>
    <TabNavigator />
  </Provider>
);

export default App;
