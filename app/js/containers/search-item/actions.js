import * as selectTypes from './reducers';
export default function selectItem(item){

	return function (dispatch){
		dispatch({type: selectTypes.SELECT_ITEM,payload: item});
	};
}