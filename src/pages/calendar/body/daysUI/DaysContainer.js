import React from 'react';
import { currentDay, currentMonth, currentYear } from '@root/redux/common';
import { useDispatch } from 'react-redux';
import { addEventActions } from '@root/redux/redusers/addEventReducer';
import { Days } from '@root/pages/calendar/body/daysUI/Days';


export const DaysContainer = ({ dateObject, nextMonthDays, prevMonthDays, days, date, usingMonth, year }) => {
  let object = dateObject;
  const ifNull = object === null;
  const helper = (condition) => {
    condition ? object = { day: currentDay, month: currentMonth, year: currentYear } : '';
    return object;
  };
  helper(ifNull);
  const conditionForCurrentDay = currentMonth === usingMonth && currentYear === year;
  const conditionForSelectedDay = helper(ifNull).month === usingMonth && helper(ifNull).year === year;
  const dispatch = useDispatch();

  const initEvent = (data, params) => dispatch(addEventActions.initEvent(data, params));

  return (
    <Days
      dateObject={object}
      nextMonthDays={nextMonthDays}
      prevMonthDays={prevMonthDays}
      days={days}
      date={date}
      usingMonth={usingMonth}
      year={year}
      initEvent={initEvent}
      conditionForCurrentDay={conditionForCurrentDay}
      conditionForSelectedDay={conditionForSelectedDay}
    />
  );
};
