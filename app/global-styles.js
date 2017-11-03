import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    font-family: 'Lato', sans-serif !important;
  }
.container{
  width: 1310px;
}
  #app {
    background-color: #f7f8f9;
    height: 100%;
    min-height: 100%;
    min-width: 100%;
    > div{
       height: 100%;
    }
  }

`;
