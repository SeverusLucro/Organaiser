import styled from 'styled-components';


export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 9%;
    border: 1px solid black;
    border-bottom: none;
    border-radius: 10px 10px 0 0;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const MonthYear = styled.div`
  color: red;
  font-size: 25px;
`;

export const Date = styled.div`
  color: red;
  cursor: pointer;
`;

export const Rotation = styled.span`
   width: 5px;
   height: 5px;
   border-top: 2px solid red;
   border-right: 2px solid red;
   transform: ${(props) => (props.position === 'prev' ? 'rotate(225deg)' : 'rotate(44deg)')};
   cursor: pointer;
`;

export const DecorOutside = styled.div`
  border: 1px solid red;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
`;

export const Top = styled.div`
    display: flex;
    width: 100%;
    height: 50%;
    justify-content: space-between;
    align-items: center;
`;

export const WrapperForMonth = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-evenly;
`;

export const WrapperForDate = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
`;

export const Bottom = styled.div`
    display: flex;
    width: 100%;
    height: 50%;
    justify-content: space-around;
    align-items: center;
`;

export const weekDays = styled.div`
  color: ${(props) => (props.selected ? 'red' : 'black')};
  font-size: 13px;
`;

Wrapper.MonthYear = MonthYear;
Wrapper.Date = Date;
Wrapper.Rotation = Rotation;
Wrapper.DecoreOutside = DecorOutside;
Wrapper.weekDays = weekDays;
Wrapper.Top = Top;
Wrapper.Bottom = Bottom;
