export const FETCHING_START = "FETCHING_START";
export const FETCHING_DONE = "FETCHING_DONE";
export const FETCHING_FAILED = "FETCHING_FAILED";

const initialState = {
	term: '',
	fetching: false,
	fetched: false,
	fetchedData: [],
	error: null
};

export default function fetchData (state=initialState, action) {
	switch (action.type) {
		case FETCHING_START:
			state = {...state,fetching: true,term: action.payload.term};
			break;
		case FETCHING_DONE:
			state = {...state,fetching: false,fetched: true,fetchedData: action.payload.result};
			break;
		case FETCHING_FAILED:
			state = {...state,fetching: false,error: action.payload.result};
			break;
		default:
			return state;
	}
	return state;
};