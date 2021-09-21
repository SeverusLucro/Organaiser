import styled from 'styled-components';


export const Wrapper = styled.div`
  width: 100%;
  height: 7%;
  border: 1px solid black;
  border-top: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 0 0 10px 10px;
  position: relative;
`;

export const WrapperElements = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  font-size: 13px;
  
  & img {
    cursor: pointer;
  }
`;

export const Img = styled.img`
   width: 20px;
`;

export const Input = styled.input`
  display: ${(props) => (props.clickedSearch ? 'flex' : 'none')};
  position: absolute;
  top: 27%;
  left: 28%;
  outline: none;
`;

export const Button = styled.button`
  display: ${(props) => (props.clickedSearch ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 27%;
  left: 59%;
  width: 50px;
  background: red;
  color: white;
  border: none;
  height: 21px;
  cursor: pointer;
`;

WrapperElements.Img = Img;
WrapperElements.Input = Input;
WrapperElements.Button = Button;
