import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from './components/app/app';
import store from './components/reducer/reducer.js';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('todoapps'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
