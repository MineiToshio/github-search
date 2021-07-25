import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: ${theme.font.family.default};
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    width: 100%;
  }
`;

export default GlobalStyles;
