import React from 'react';
import { Wrapper } from '@root/pages/calendar/styled';
import { Body } from '@root/pages/calendar/body/Body';
import { Footer } from '@root/pages/calendar/footer/Footer';
import { HeaderContainer } from '@root/pages/calendar/header/Header';


export const Calendar = (props) => {
  const { date, year, monthName, week, month, prevMonthDays , days, nextMonthDays, dateObject, dayEvents } = props;

  return (
    <Wrapper>
      <HeaderContainer date={date} year={year} month={monthName} week={week} />
      <Body
        usingMonth={month}
        prevMonthDays={prevMonthDays}
        days={days}
        nextMonthDays={nextMonthDays}
        date={date}
        year={year}
        dateObject={dateObject}
        dayEvents={dayEvents}
      />
      <Footer />
    </Wrapper>
  );
};
