import { combineReducers } from 'redux';
import { dateReducer } from '@root/redux/redusers/dateReduser';
import { addEventReducer } from '@root/redux/redusers/addEventReducer';


export const rootReducer = combineReducers({
  date: dateReducer,
  addEvent: addEventReducer,
});
