import { createGlobalStyle } from 'styled-components';

import SkyFont from '../fonts/SKYBORI.ttf';

const Global = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    src: url(${SkyFont}) format('truetype');
    font-weight: 1 999;
    font-display: swap;
  }

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Inter', sans-serif;
  }
`;

export default Global;