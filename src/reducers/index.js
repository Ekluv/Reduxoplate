import { combineReducers } from 'redux';
import sampleReducer from './reducers';

const rootReducer = combineReducers({
	data: sampleReducer
});

export default rootReducer;
