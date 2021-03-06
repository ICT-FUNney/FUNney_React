import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store.js';

import './index.css';
import App from './App'
import * as serviceWorker from './serviceWorker';

import { CookiesProvider } from 'react-cookie';

ReactDOM.render((
  <CookiesProvider>
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
  </CookiesProvider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
