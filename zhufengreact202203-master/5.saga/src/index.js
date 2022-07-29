import React from 'react';
import { createRoot } from 'react-dom/client';
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import store from './store'

createRoot(document.querySelector('#root'))
  .render(
    <Provider store={store}>
      <Counter />
    </Provider>);