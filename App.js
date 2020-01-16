import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { rootReducer } from './redux/reducers';

import { RootContainer } from './container/RootContainer';

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <RootContainer />
    </Provider>
  );
}
