import { takeLatest, put, call, select } from 'redux-saga/effects';
import { helper } from '@root/redux/common';
import { dateActions } from '@root/redux/redusers/dateReduser';
import { dateSelectors } from '@root/redux/selectors/dateSelector';


export function* switchMonthSaga(action) {
  if (!action && action.payload) return;
  try {
    const objectDate = yield select(dateSelectors.getObjectDate);
    const newDate = action.payload
      ? new Date(new Date(objectDate).setMonth(new Date(objectDate).getMonth() + 1))
      : new Date(new Date(objectDate).setMonth(new Date(objectDate).getMonth() - 1));
    const { currentMonthDays, prevMonthDays, nextMonthDays, year, month, monthName } = helper(newDate);
    yield put(dateActions.setCurrentMonthDays(currentMonthDays));
    yield put(dateActions.setPrevMonthDays(prevMonthDays));
    yield put(dateActions.setNextMonthDays(nextMonthDays));
    yield put(dateActions.setYear(year));
    yield put(dateActions.setMonth(month));
    yield put(dateActions.setMonthName(monthName));
    yield put(dateActions.setObjectDate(newDate));
  } catch (e) {
    yield call(console.error, e);
  }
}

export function* switchMonthWatcher() {
  yield takeLatest(dateActions.onChangeStateCalendar.type, switchMonthSaga);
}
