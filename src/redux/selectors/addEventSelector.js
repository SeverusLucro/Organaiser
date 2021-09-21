import { createSelector } from 'reselect';


const addEventState = (state) => state.addEvent;

const getComments = createSelector(addEventState, (state) => state.comments);

const getClickedDay = createSelector(addEventState, (state) => state.clickedDay);

const getClickedAdd = createSelector(addEventState, (state) => state.clickedAdd);

const getSearch = createSelector(addEventState, (state) => state.search);

const getClickedSearch = createSelector(addEventState, (state) => state.clickedSearch);

export const addEventSelectors = { getComments, getClickedDay, getClickedAdd, getSearch, getClickedSearch };
