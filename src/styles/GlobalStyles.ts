import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyles = createGlobalStyle`
  html {
    font-family: ${theme.font.family.default};
  }

  body {
    margin: 0;
    width: 100%;
  }
`;

export default GlobalStyles;
