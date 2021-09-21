import React from 'react';
import { Wrapper } from '@root/pages/calendar/body/styled';
import { BodyText } from '@root/pages/calendar/body/bodyText/Text';
import { DaysContainer } from '@root/pages/calendar/body/daysUI/DaysContainer';


export const Body = ({ dayEvents, dateObject, prevMonthDays, days, nextMonthDays, date, usingMonth, year }) => (
  <Wrapper>
    <DaysContainer
      usingMonth={usingMonth}
      nextMonthDays={nextMonthDays}
      prevMonthDays={prevMonthDays}
      days={days}
      date={date}
      year={year}
      dateObject={dateObject}
    />
    <BodyText dayEvents={dayEvents} />
  </Wrapper>
);
