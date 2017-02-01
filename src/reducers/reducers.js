import { SAMPLE_ACTION } from '../actions';
import Immutable from 'immutable';

const INITIAL_STATE = {msg: ''};

var sampleReducer = (state=INITIAL_STATE, action) => {
	switch (action.type) {
		case SAMPLE_ACTION:
			return {...state, msg: action.payload}; // ES6 way to clone obj
	};
	return state
};

export default sampleReducer;