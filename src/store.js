import { createStore } from 'redux';

import reducer from './reducers';


function createReduxStore(preloadedState) {
  return createStore(
    // preloadedState to pass intitial state in reducers
    reducer, preloadedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
}

/* eslint-enable */
export default createReduxStore;
