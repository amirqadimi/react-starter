export const SELECT_ITEM = "SELECT_ITEM";

const initialState = {
	item: {},
	selected: false
};

export default function selectItem (state=initialState, action) {
	switch (action.type) {
		case SELECT_ITEM:
			state = {...state,item: action.payload,selected: true};
			break;
		default:
			return state;
	}
	return state;
};