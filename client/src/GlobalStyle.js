import { createGlobalStyle } from "styled-components/macro";
import LaurenPremier from "./assets/fonts/LaurenPremier.woff2";

const GlobalStyle = createGlobalStyle`
*,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
@font-face {
    font-family: LaurenPremier;
    font-style: normal;
    font-weight: 400;
    src: url(${LaurenPremier});
}
:root {
    --primary-color: white;
    --secondary-color: #027368;
    --icon-inactive-color: #565959;
    --icon-active-color: #027368;
    --info-text-color:#565959;
    --font-size: 16px;
}

body { 
  font-size: 1rem;
  font-family: "Trebuchet", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--info-text-color)
}

  hr {
    height: 1px;
    border: 0;
    justify-self: center;
    background:  #4d868c;
    background-image: linear-gradient(120deg, #4d868c, #027368);
  }

h1, h2, h3 {
    font-family: 'LaurenPremier';
    font-size: 1,7rem;
    color: var(--secondary-color);
    text-align: center;
    padding: 5px;
 
}
h2{
    font-size: 1,5rem;
    color: var(--primary-color);
}
h3{
    font-size: 1.5rem;
    color: var(--secondary-color);
}

h4{
  font-size: 1rem;
  font-family: 'LaurenPremier';
  color: var(--info-text-color);
  padding: 3px;
}
`;

export default GlobalStyle;
