export const SAMPLE_ACTION = 'SAMPLE_ACTION';


export var sampleAction = (data) => {
	return {
		type: SAMPLE_ACTION,
		payload: data
	};
};