import { takeLatest, put, call } from 'redux-saga/effects';
import { dateActions } from '@root/redux/redusers/dateReduser';
import { currentDay, currentMonth, currentYear, helper } from '@root/redux/common';


export function* dateSaga(action) {
  if (!action) return;
  try {
    const { currentMonthDays, prevMonthDays, nextMonthDays, year, month, monthName } = helper(new Date());
    yield put(dateActions.setCurrentMonthDays(currentMonthDays));
    yield put(dateActions.setPrevMonthDays(prevMonthDays));
    yield put(dateActions.setNextMonthDays(nextMonthDays));
    yield put(dateActions.setYear(year));
    yield put(dateActions.setMonth(month));
    yield put(dateActions.setMonthName(monthName));
    yield put(dateActions.setDate(currentDay));
    yield put(dateActions.setObjectDate(new Date()));
    yield put(dateActions.setInitCalendar({ day: currentDay, month: currentMonth, year: currentYear }));
  } catch (e) {
    yield call(console.error, e);
  }
}

export function* dateWatcher() {
  yield takeLatest(dateActions.initDate.type, dateSaga);
}
