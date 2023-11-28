import { createGlobalStyle } from "styled-components"
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;

  }
  body{
    background: #000;
  }
 
`

export const colors = {
    lite: "#2E8080",
    white: "#FFF",
    preto: "#000",
    text: "#919a8b "
  }
   