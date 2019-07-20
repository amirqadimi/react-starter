import axios from 'axios';
import * as fetchTypes from './reducers';

export default function fetchData(term) {
	const URL = `https://www.aparat.com/etc/api/videoBySearch/text/${term}/perpage/10`;

	return function(dispatch) {
		dispatch({ type: fetchTypes.FETCHING_START, payload: { term: term } });
		axios(URL)
			.then(res => {
				dispatch({ type: fetchTypes.FETCHING_DONE, payload: { result: res.data } });
			})
			.catch(error => {
				dispatch({ type: fetchTypes.FETCHING_FAILED, payload: { result: error } });
			});
	};
}