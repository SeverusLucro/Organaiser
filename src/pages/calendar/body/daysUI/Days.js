import React from 'react';
import { Wrapper, ShowDays } from '@root/pages/calendar/body/daysUI/styled';


export const Days = (props) => {
  const { dateObject, nextMonthDays, prevMonthDays,
    days, date, usingMonth, year,
    initEvent, conditionForSelectedDay, conditionForCurrentDay } = props;

  return (
    <Wrapper>
      {prevMonthDays.map((day) => (
        <ShowDays key={day} prev>{day}</ShowDays>
      ))}
      {days.map((day) => (
        <ShowDays
          currentMonth
          selected={dateObject.day === day && conditionForSelectedDay}
          onClick={() => initEvent({ day, year, usingMonth, params: 'days' })}
          key={day}
          current={date === day && conditionForCurrentDay}
        >
          {day}
        </ShowDays>
      ))}
      {nextMonthDays.map((day) => (
        <ShowDays
          key={day}
          next
        >
          {day}
        </ShowDays>
      ))}
    </Wrapper>
  );
};
