import { takeLatest, put, call, select } from 'redux-saga/effects';
import { addEventActions } from '@root/redux/redusers/addEventReducer';
import { addEventSelectors } from '@root/redux/selectors/addEventSelector';
import { storage } from '@root/localStorage';
import { dateSelectors } from '@root/redux/selectors/dateSelector';


export function* optionsSaga(action) {
  if (!action && action.payload) return;
  try {
    const array = yield select(addEventSelectors.getComments);
    let selectedDay = yield select(addEventSelectors.getClickedDay);
    if (selectedDay === null) selectedDay = yield select(dateSelectors.getInitCalendar);
    const object = JSON.parse(localStorage.getItem('calendar'));
    const { year, month, day } = selectedDay;
    if (action.payload.params === 'cut') {
      if (!array) return;
      const arrayCopy = JSON.parse(JSON.stringify(array));
      const index = arrayCopy.indexOf(arrayCopy[action.payload.position]);
      if (index > -1) {
        arrayCopy.splice(index, 1);
      }
      yield put(addEventActions.setComments(arrayCopy));
      storage({ year, month, day, position: action.payload.position, params: 'cut' });
    }
    if (action.payload.params === 'search') {
      const searchedElements = [];
      const arrOfObjCopy = JSON.parse(JSON.stringify(object[year][month][day]));
      searchedElements.push(arrOfObjCopy.forEach((element) => {
        if (element.toLowerCase().includes(action.payload.text)) {
          searchedElements.push(element);
        }
      }));
      yield put(addEventActions.setSearch(searchedElements));
      if (action.payload.text === '') {
        yield put(addEventActions.setComments(object[year][month][day]));
      } else { yield put(addEventActions.setComments(searchedElements)); }
    }
  } catch (e) {
    yield call(console.error, e);
  }
}

export function* optionsWatcher() {
  yield takeLatest(addEventActions.initEvent, optionsSaga);
}
