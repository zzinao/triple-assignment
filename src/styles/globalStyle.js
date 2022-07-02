import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

*{
    margin:0 ;
    padding:0;
    box-sizing:border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  }

  body{
    font-size: 15px;
    color: #3a3a3acc;
  }

  `
export default GlobalStyle
