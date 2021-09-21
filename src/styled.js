import styled, { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background: #fff;
    font-family: 'circe', Helvetica, Sans-Serif;
  }

  #root {
    height: 100%
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
  display: flex;
  padding: 0 25px;
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
  justify-content: ${(props) => (props.alignCenter ? 'center' : 'normal')};
  align-items: ${(props) => (props.itemsCenter ? 'center' : 'normal')};
`;

export const Wrapper = styled.div`
  display: ${(props) => (props.inline ? 'inline' : 'flex')};
  align-items: ${(props) => (props.center ? 'center' : 'inherit')};
  width: ${(props) => (props.full ? '100%' : '')};
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
  justify-content: ${(props) => (props.justify ? 'space-between' : 'inherit')};
  flex-wrap: ${(props) => (props.wrap ? 'wrap' : 'nowrap')};
`;
