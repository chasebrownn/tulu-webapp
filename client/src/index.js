import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from './reducers';
import App from './App';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
    <h2 className="text-3xl tracking-tight font-extrabold text-wgit-900 md:text-4xl">tulu</h2>
  </Provider>,
  document.getElementById('root'),
);
