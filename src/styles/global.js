import { createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  *{
      padding: 0;
      margin: 0;
      font-family: 'Nunito Sans', sans-serif;
  }

  body{
    font-size: 16px;
  }
`;

export const theme = {
  colors:{
    silver:'#BFBFBF',
    boulder: '#7A7A7A',
    carnation: '#F8475F',
    concrete: '#F2F2F2',
    mineShaft: '#333333',
    crimson: '#D7182A'
  }
}