import styled from 'styled-components';


export const Wrapper = styled.div`
  position: absolute;
  top: -4%;
  width: 100%;
  height: 100%;
  display: ${(props) => (props.clickedAdd ? 'flex' : 'none')};
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  border: none;
`;

export const Textarea = styled.textarea`
  display: ${(props) => (props.none ? 'none' : 'flex')};
  outline: none;
  resize: none;
  width: 80%;
  height: 75%;
  padding: 10px 15px;
`;

export const WrapForButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 88%;
`;

export const Button = styled.button`
  border: none;
  width: 50%;
  height: 30px;
  background: #00c4ff;
  color: #0b441a;
  cursor: pointer;
  border-right: ${(props) => ((props.left) ? '1px solid black' : '')};
`;

Wrapper.Textarea = Textarea;
Wrapper.WrapForButtons = WrapForButtons;
Wrapper.Button = Button;
