import { all } from 'redux-saga/effects';
import { dateWatcher } from '@root/redux/sagas/dateSaga';
import { switchMonthWatcher } from '@root/redux/sagas/toggleSaga';
import { addEventWatcher } from '@root/redux/sagas/addEventSaga';
import { optionsWatcher } from '@root/redux/sagas/optionsSaga';


export function* rootSaga() {
  yield all([
    dateWatcher(),
    switchMonthWatcher(),
    addEventWatcher(),
    optionsWatcher(),
  ]);
}
