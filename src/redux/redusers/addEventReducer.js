import { createAction, createSlice } from '@reduxjs/toolkit';


const storeName = 'addEvent';

const initialState = {
  comments: null,
  clickedDay: null,
  clickedAdd: false,
  search: [],
  clickedSearch: false,
};

export const addEventSlice = createSlice({
  name: storeName,
  initialState,

  reducers: {
    setComments(state, action) {
      state.comments = action.payload;
    },
    setClickedDay(state, action) {
      state.clickedDay = action.payload;
    },
    setIsClickedAdd(state, action) {
      state.clickedAdd = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
    setClickedSearch(state, action) {
      state.clickedSearch = action.payload;
    },
  },
});

export const addEventActions = {
  setComments: addEventSlice.actions.setComments,
  setClickedDay: addEventSlice.actions.setClickedDay,
  setClickedAdd: addEventSlice.actions.setIsClickedAdd,
  setSearch: addEventSlice.actions.setSearch,
  setClickedSearch: addEventSlice.actions.setClickedSearch,
  initEvent: createAction(`${storeName}/initEvent`),
};

export const addEventReducer = addEventSlice.reducer;
