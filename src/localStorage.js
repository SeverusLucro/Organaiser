import { currentDay, currentMonth, currentYear } from '@root/redux/common';


export const loadState = localStorage.getItem('event')
  ? JSON.parse(localStorage.getItem('event'))
  : {};

let iteration = 0;

const localStorageObj = localStorage.getItem('calendar');

if (!localStorageObj) localStorage.setItem('calendar', JSON.stringify({}));

const isIteration = (array) => (array.length === 0 ? iteration = 0 : iteration = array.length);

export const storage = (action) => {
  const obj = JSON.parse(localStorage.getItem('calendar'));
  const latest = isLatest(obj, action.day, action.month, action.year);
  if (latest === '' && action.params !== 'cut') {
    if (!obj[action.year]) obj[action.year] = {};
    if (!obj[action.year][action.month]) obj[action.year][action.month] = {};
    if (!obj[action.year][action.month][action.day]) obj[action.year][action.month][action.day] = [];
    const iter = isIteration(obj[action.year][action.month][action.day]);
    if (!obj[action.year][action.month][action.day][iter]) {
      obj[action.year][action.month][action.day][iter] = {};
    }
    obj[action.year][action.month][action.day][iter] = action.comment;
    localStorage.setItem('calendar', JSON.stringify(obj));
  } else if (latest === 'needToCut' && Object.keys(obj).length > 0) {
    delete obj[action.year][action.month][action.day];
    localStorage.setItem('calendar', JSON.stringify(obj));
  }
  if (action.params === 'cut') {
    const arrCopy = obj[action.year][action.month][action.day];
    const index = arrCopy.indexOf(arrCopy[action.position]);
    if (index > -1) {
      arrCopy.splice(index, 1);
    }
    obj[action.year][action.month][action.day] = arrCopy;
    localStorage.setItem('calendar', JSON.stringify(obj));
  }
};

const isLatest = (obj, day, month, year) => {
  const condition = day >= currentDay && month >= currentMonth && year >= currentYear;
  const latest = 'needToCut';
  return condition ? '' : latest;
};
