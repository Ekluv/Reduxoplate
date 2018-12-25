import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import createReduxStore from './store';
import App from './containers/App';

import '@assets/stylesheets/main.scss';

const store = createReduxStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
