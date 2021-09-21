export const monthName = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь',
  'октябрь', 'ноябрь', 'декабрь'];
export const currentMonth = new Date().getMonth();
export const currentYear = new Date().getFullYear();
export const currentDay = new Date().getDate();
export const getDay = (data) => (data.getDay() === 0 ? 6 : data.getDay() - 1);

export const helper = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const dateNow = new Date(year, month);
  const dateNextMonth = new Date(year, month + 1);
  const countCurrentMonthDays = 32 - new Date(year, month, 32).getDate();
  const countPrevMonthDays = 32 - new Date(year, month - 1, 32).getDate();
  const currentMonthDays = [];
  const prevMonthDays = [];
  const nextMonthDays = [];
  const positionCurrMonth = getDay(dateNow);
  let positionNextMonth = getDay(dateNextMonth);
  if (positionNextMonth === 0) positionNextMonth = 8;
  for (let i = countPrevMonthDays; i > countPrevMonthDays - positionCurrMonth; i--) {
    prevMonthDays.push(i);
  }
  prevMonthDays.reverse();
  for (let i = 1; i <= countCurrentMonthDays; i++) {
    currentMonthDays.push(i);
  }
  for (let i = 1; i < 8 - positionNextMonth; i++) {
    nextMonthDays.push(i);
  }

  return {
    currentMonthDays,
    prevMonthDays,
    nextMonthDays,
    year,
    month,
    monthName: monthName[month],
  };
};
