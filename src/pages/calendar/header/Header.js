import React from 'react';
import { Wrapper, WrapperForMonth, WrapperForDate } from '@root/pages/calendar/header/styled';
import { useDispatch } from 'react-redux';
import { dateActions } from '@root/redux/redusers/dateReduser';


export const HeaderContainer = ({ month, year, date, week }) => {
  const dispatch = useDispatch();
  const days = week.map((day) => ((day === 'СБ' || day === 'ВС')
    ? (<Wrapper.weekDays key={day} selected>{day}</Wrapper.weekDays>)
    : (<Wrapper.weekDays key={day}>{day}</Wrapper.weekDays>)));

  const changeCalendar = (value) => dispatch(dateActions.onChangeStateCalendar(value));

  const onClick = () => dispatch(dateActions.initDate());

  return <Header month={month} year={year} date={date} days={days} changeCalendar={changeCalendar} onClick={onClick} />;
};


export const Header = ({ month, year, date, days, changeCalendar, onClick }) => (
  <Wrapper>
    <Wrapper.Top>
      <WrapperForMonth>
        <Wrapper.Rotation position="prev" onClick={() => changeCalendar(0)} />
        <Wrapper.MonthYear>{`${month} ${year}`}</Wrapper.MonthYear>
        <Wrapper.Rotation position="next" onClick={() => changeCalendar(1)} />
      </WrapperForMonth>
      <WrapperForDate>
        <Wrapper.DecoreOutside>
          <Wrapper.Date onClick={onClick}>{date}</Wrapper.Date>
        </Wrapper.DecoreOutside>
      </WrapperForDate>
    </Wrapper.Top>
    <Wrapper.Bottom>
      {days}
    </Wrapper.Bottom>
  </Wrapper>
);
