import React from 'react';
import Routes from 'containers/Routes';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
window.store = store;

export default () => (
  <Provider store={store}>
    <Routes store={store}/>
  </Provider>
);
