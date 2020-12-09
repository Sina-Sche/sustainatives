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
    --gradient: linear-gradient(120deg, #4d868c, #027368);
     
}

body { 
  font-size: 1rem;
  font-family: "Trebuchet", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--info-text-color);
  margin-top: 62px;
  margin-bottom: 62px;

}

h1, h2, h3, h5, h6{
    font-family: 'LaurenPremier';
    font-size: 1.7rem;
    color: var(--secondary-color);
    text-align: center;
    padding: 5px; 
}
h2{
    font-size: 1.5rem;
    
}
h3{
    font-size: 1.5rem;
}

h4{
  font-size: 1rem;
  padding: 3px;
}
h5{
  font-size: 1rem;
  font-family: 'Trebuchet MS', sans-serif;
}

h5{
  font-size: 1rem;
  font-family: 'LaurenPremier';
  color: var(--secondary-color);
  padding: 3px;
}
h6 {
  font-size: 1rem;

}
a{
  text-decoration: none;
}

p{
  letter-spacing: 1;
  font-size: 1rem;
}

button{
  background: none;
  border: none;

}

li {
  list-style: none;
}

`;

export default GlobalStyle;
