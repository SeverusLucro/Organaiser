import { takeLatest, put, call, select } from 'redux-saga/effects';
import { addEventActions } from '@root/redux/redusers/addEventReducer';
import { addEventSelectors } from '@root/redux/selectors/addEventSelector';
import { storage } from '@root/localStorage';
import { dateSelectors } from '@root/redux/selectors/dateSelector';


export function* addEventSaga(action) {
  if (!action && action.payload) return;
  try {
    let selectedDay = yield select(addEventSelectors.getClickedDay);
    if (selectedDay === null) selectedDay = yield select(dateSelectors.getInitCalendar);
    if (action.payload.params === 'days') {
      const clickedDay = { day: action.payload.day, month: action.payload.usingMonth, year: action.payload.year };
      yield put(addEventActions.setClickedDay(clickedDay));
      const { day, usingMonth, year } = action.payload;
      const getComments = JSON.parse(localStorage.getItem('calendar'));
      if (Object.keys(getComments).length === 0) {
        return;
      }
      if (Object.keys(getComments).length !== 0) {
        yield put(addEventActions.setComments(getComments[year][usingMonth][day]));
      }
    }
    if (action.payload.params === 'comment') {
      if (action.payload.value.length < 1) return;
      const { day, month, year } = selectedDay;
      storage({ year, month, day, comment: action.payload.value });
      const comments = JSON.parse(localStorage.getItem('calendar'));
      if (!comments && Object.keys(comments).length === 0) {
        return;
      }
      if (comments && Object.keys(comments).length !== 0) {
        yield put(addEventActions.setComments(comments[year][month][day]));
      }
    }
  } catch (e) {
    yield call(console.error, e);
  }
}

export function* addEventWatcher() {
  yield takeLatest(addEventActions.initEvent, addEventSaga);
}
