import styled from 'styled-components';


export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: ${(props) => (props.flex ? 'flex' : 'none')};
  justify-content: ${(props) => (props.justify ? 'center' : 'inherit')};
  justify-content: ${(props) => (props.exist ? 'flex-start' : '')};
  align-items: ${(props) => (props.align ? 'center' : 'flex-start')};
  align-items: ${(props) => (props.exist ? 'flex-start' : '')};
  margin: ${(props) => (props.exist ? '0 auto' : '')};
  flex-direction: ${(props) => (props.exist ? 'column' : '')};
  overflow: auto;
`;

export const Text = styled.div`
    width: 90px;
    height: 90px;
    color: lightgrey;
    display: ${(props) => (props.condition ? 'none' : 'flex')};
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const Img = styled.img`
  width: 32px;
  height: 32px;
`;

export const ShowText = styled.span`
  display: ${(props) => (props.newEvent ? 'none' : 'flex')};
`;

export const Options = styled.div`
  display: ${(props) => (props.newEvent ? 'none' : 'flex')};
  width: 40px;
  align-items: center;
  justify-content: center;
  
  & img {
   cursor: pointer;
  }
`;

export const ShowTextWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  margin-top: 2px;
`;

Wrapper.Img = Img;
Wrapper.Text = Text;
Wrapper.ShowText = ShowText;
Wrapper.Options = Options;
