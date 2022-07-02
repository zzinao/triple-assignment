import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Hevetica', sans-serif;
  }

  body{
    width: 100%;
    min-width: 1200px;
    font-size: 15px;
    color: #3a3a3acc;
  }

  `
export default GlobalStyle
