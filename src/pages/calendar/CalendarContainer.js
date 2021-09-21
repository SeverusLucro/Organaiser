import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dateSelectors } from '@root/redux/selectors/dateSelector';
import { dateActions } from '@root/redux/redusers/dateReduser';
import { addEventSelectors } from '@root/redux/selectors/addEventSelector';
import { Calendar } from '@root/pages/calendar/Calendar';


export const CalendarContainer = () => {
  const date = useSelector(dateSelectors.getDate);
  const days = useSelector(dateSelectors.getCurrentMonthDays);
  const year = useSelector(dateSelectors.getYear);
  const month = useSelector(dateSelectors.getMonth);
  const monthName = useSelector(dateSelectors.getMonthName);
  const week = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
  const prevMonthDays = useSelector(dateSelectors.getPrevMonthDays);
  const nextMonthDays = useSelector(dateSelectors.getNextMonthDays);
  const dateObject = useSelector(addEventSelectors.getClickedDay);
  const dayEvents = useSelector(addEventSelectors.getComments);

  const dispatch = useDispatch();

  useEffect(() => dispatch(dateActions.initDate()), [dispatch]);

  return (
    <Calendar
      date={date}
      year={year}
      monthName={monthName}
      week={week}
      month={month}
      prevMonthDays={prevMonthDays}
      days={days}
      nextMonthDays={nextMonthDays}
      dateObject={dateObject}
      dayEvents={dayEvents}
    />
  );
};
