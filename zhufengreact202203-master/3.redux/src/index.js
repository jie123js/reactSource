import React from 'react';
import { createRoot } from 'react-dom/client';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import { Provider } from './react-redux';
import store from './store';
let root = document.getElementById('root');
createRoot(root).render(
  <Provider store={store}>
    <Counter1 />
    <hr />
    <Counter2 />
  </Provider>);
