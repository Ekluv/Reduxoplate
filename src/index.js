import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // thunk middleware for aync actions in redux(doing things redux way)

import SampleComponent from './components/sample_component';
import rootReducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

class App extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
		<div className="app">
			<SampleComponent/>
		</div>
		);
	}
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <App />
  </Provider>, document.querySelector('.container-fluid'))