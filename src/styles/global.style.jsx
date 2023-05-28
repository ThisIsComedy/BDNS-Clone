import { createGlobalStyle } from "styled-components";
import Komtitp from "../fonts/Komtitp.woff";
import Georgia from "../fonts/Georgia.woff";
import LondrinaSolid from "../fonts/LondrinaSolid.woff";
import NanumMyeongjo from "../fonts/NanumMyeongjo.woff";
import LatoLight from "../fonts/LatoLight.woff";
import LatoRegular from "../fonts/LatoRegular.woff";
import LatoBold from "../fonts/LatoBold.woff";

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

  // LatoRegular(300)
  @font-face {
    font-family: 'LatoLight';
    src: local('LatoLight'), local('LatoLight');
    font-style: normal;
    src: url(${LatoLight}) format('woff');
  }
  // font-family: 'LatoLight','Noto Sans KR';

  // LatoRegular(400)
  @font-face {
    font-family: 'LatoRegular';
    src: local('LatoRegular'), local('LatoRegular');
    font-style: normal;
    src: url(${LatoRegular}) format('woff');
  }
  // font-family: 'LatoRegular','Noto Sans KR';

  // LatoBold(700)
  @font-face {
    font-family: 'LatoBold';
    src: local('LatoBold'), local('LatoBold');
    font-style: normal;
    src: url(${LatoBold}) format('woff');
  }
  // font-family: 'LatoBold','Noto Sans KR';

  // Nanum Myeongjo
  @font-face {
    font-family: 'NanumMyeongjo';
    src: local('NanumMyeongjo'), local('NanumMyeongjo');
    font-style: normal;
    src: url(${NanumMyeongjo}) format('woff');
  }
  // font-family: 'NanumMyeongjo', serif;

  // Londrina Solid
  @font-face {
    font-family: 'LondrinaSolid';
    src: local('LondrinaSolid'), local('LondrinaSolid');
    font-style: normal;
    src: url(${LondrinaSolid}) format('woff');
  }
  // font-family: 'LondrinaSolid';

  // Komtitp
  @font-face {
    font-family: 'Komtitp';
    src: local('Komtitp'), local('Komtitp');
    font-style: normal;
    src: url(${Komtitp}) format('woff');
  }
  // font-family: 'Komtitp';

  // Georgia
  @font-face {
    font-family: 'Georgia';
    src: local('Georgia'), local('Georgia');
    font-style: normal;
    src: url(${Georgia}) format('woff');
  }
  // font-family: 'Georgia';
`;

export default GlobalStyle;
