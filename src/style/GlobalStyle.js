import { createGlobalStyle } from 'styled-components';

export const GlobalSTyle = createGlobalStyle`
  :root {
    --primary-color: #9a4c95;
    --second-color: #745c97;
    --trity-color: #d3bccc;
    --quarter-color: #82A7A6;
  }
  * {
    padding: 0;
    margin: 0;
    outline: none;
    box-sizing: border-box;
  }
  body, html, #root{
    width: 100vw;
    height: 100vh;
    background: #E8D7F1;
  }
  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }  
  h1 {
    color: white;
  }
`