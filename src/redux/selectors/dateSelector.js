import { createSelector } from 'reselect';


const dateState = (state) => state.date;

const getDate = createSelector(dateState, (state) => state.currentDay);

const getYear = createSelector(dateState, (state) => state.year);

const getMonth = createSelector(dateState, (state) => state.month);

const getCurrentMonthDays = createSelector(dateState, (state) => state.currentMonthDays);

const getPrevMonthDays = createSelector(dateState, (state) => state.prevMonthDays);

const getNextMonthDays = createSelector(dateState, (state) => state.nextMonthDays);

const getMonthName = createSelector(dateState, (state) => state.monthName);

const getObjectDate = createSelector(dateState, (state) => state.objectDate);

const getInitCalendar = createSelector(dateState, (state) => state.initCalendar);

export const dateSelectors = {
  getDate,
  getCurrentMonthDays,
  getPrevMonthDays,
  getNextMonthDays,
  getYear,
  getMonth,
  getMonthName,
  getObjectDate,
  getInitCalendar,
};
