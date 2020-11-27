import { createGlobalStyle } from "styled-components/macro";
import LaurenPremier from "./assets/fonts/LaurenPremier.woff2";

const GlobalStyle = createGlobalStyle`
*,
  *::after,
  *::before {
    box-sizing: border-box;
  }
@font-face {
    font-family: LaurenPremier;
    font-style: normal;
    font-weight: 400;
    src: url(${LaurenPremier});
}
:root {
    --primary-color: white;
    --secondary-color: #11413D;
    --icon-inactive-color: #565959;
    --icon-active-color: #027368;
    --info-text-color:#565959;
    --font-size: 16px;
}
html{
  margin: 0;
  padding: 0;
}
body
 {
  margin: 0;
  padding:0;
  font-size: 16px;
  font-family: "Trebuchet", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--info-text-color)

}
main{
  margin: 0;
  padding: 0;
}

h1, h2, h3 {
    font-family: 'LaurenPremier';
    font-size: 1,7rem;
    color: var(--secondary-color);
    text-align: center;
}
h2{
    font-size: 1,5rem;
    color: var(--primary-color);
}
h3{
    font-size: 1.5rem;
    color: var(--secondary-color);
}



`;

export default GlobalStyle;
