import { createSlice, createAction } from '@reduxjs/toolkit';


const storeName = 'date';

const initialState = {
  currentDay: '',
  currentMonthDays: [],
  prevMonthDays: [],
  nextMonthDays: [],
  month: '',
  year: '',
  monthName: '',
  objectDate: null,
  initCalendar: [],
};

export const dateSlice = createSlice({
  name: storeName,
  initialState,

  reducers: {
    setDate(state, action) {
      state.currentDay = action.payload;
    },
    setCurrentMonthDays(state, action) {
      state.currentMonthDays = action.payload;
    },
    setPrevMonthDays(state, action) {
      state.prevMonthDays = action.payload;
    },
    setNextMonthDays(state, action) {
      state.nextMonthDays = action.payload;
    },
    setYear(state, action) {
      state.year = action.payload;
    },
    setMonth(state, action) {
      state.month = action.payload;
    },
    setMonthName(state, action) {
      state.monthName = action.payload;
    },
    setObjectDate(state, action) {
      state.objectDate = action.payload;
    },
    setInitCalendar(state, action) {
      state.initCalendar = action.payload;
    },
  },
});

export const dateActions = {
  setDate: dateSlice.actions.setDate,
  setCurrentMonthDays: dateSlice.actions.setCurrentMonthDays,
  setPrevMonthDays: dateSlice.actions.setPrevMonthDays,
  setNextMonthDays: dateSlice.actions.setNextMonthDays,
  setYear: dateSlice.actions.setYear,
  setMonth: dateSlice.actions.setMonth,
  setMonthName: dateSlice.actions.setMonthName,
  setObjectDate: dateSlice.actions.setObjectDate,
  setInitCalendar: dateSlice.actions.setInitCalendar,
  initDate: createAction(`${storeName}/initDate`),
  onChangeStateCalendar: createAction(`${storeName}/onChangeStateCalendar`),
};

export const dateReducer = dateSlice.reducer;
