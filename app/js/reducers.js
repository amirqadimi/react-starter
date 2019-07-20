import { combineReducers } from 'redux';

import fetchData from './containers/search-bar/reducers';
import selectItem from './containers/search-item/reducers';

export default combineReducers({
  fetchData,
  selectItem
});