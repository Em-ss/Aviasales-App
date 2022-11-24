import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './reducer/reducer.js';
import App from './components/app/app';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('todoapps'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
