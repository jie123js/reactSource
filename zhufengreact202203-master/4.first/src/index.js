import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes, Link } from 'react-router-dom';
import { HistoryRouter } from './redux-first-history/rr6';
import { Provider } from 'react-redux';
import { store, history } from './store';
import Home from './routes/Home';
import Counter from './routes/Counter';
ReactDOM.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/counter">Counter</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </HistoryRouter>
  </Provider>,
  document.getElementById('root')
);