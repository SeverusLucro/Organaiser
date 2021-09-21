import styled from 'styled-components';


export const Wrapper = styled.div`
  width: 100%;
  height: 50%;
  border-top: 1px solid #f4f4f4;
  border-bottom: 1px solid #f6f6f6;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background: #f8f8f8;
`;

export const ShowDays = styled.div`
    width: 52px;
    height: 52px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => (props.next || props.prev ? 'lightgrey' : '')};
    border-radius: ${(props) => (props.current ? '50%' : '')};
    background: ${(props) => (props.current ? '#0af4ff' : '')};
    color: ${(props) => (props.current ? 'purple' : '')};
    color: ${(props) => (props.selected ? 'white' : '')};
    border-radius: ${(props) => (props.selected ? '50%' : '')};
    background: ${(props) => (props.selected ? 'orange' : '')};
    cursor: ${(props) => (props.currentMonth ? 'pointer' : '')};
`;
