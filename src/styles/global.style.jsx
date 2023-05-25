import { createGlobalStyle } from "styled-components";
import Komtitp from "../fonts/Komtitp.woff";
import Georgia from "../fonts/Georgia.woff";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input, textarea {
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
  }

  input:focus {
    outline: none;
  }

  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }

  .fp-watermark {
    display: none !important;
  }

  .fp-watermark > a {
    display: none !important;
  }

  // Lato 폰트
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
  // font-family: 'Lato','Noto Sans KR';

  // Nanum Myeongjo 폰트
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&display=swap');
  // font-family: 'Nanum Myeongjo', serif;

  // Londrina Solid 폰트
  @import url('https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@100;300;400;900&display=swap');
  // font-family: 'Londrina Solid', cursive;

  // Komtitp 폰트
  @font-face {
    font-family: 'Komtitp';
    src: local('Komtitp'), local('Komtitp');
    font-style: normal;
    src: url(${Komtitp}) format('woff');
  }
  // font-family: KOMTITP;

  // Georgia 폰트
  @font-face {
    font-family: 'Georgia';
    src: local('Georgia'), local('Georgia');
    font-style: normal;
    src: url(${Georgia}) format('woff');
  }
  // font-family: 'Georgia';
`;

export default GlobalStyle;
