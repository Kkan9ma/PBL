import React from 'react';
import reset from "styled-reset";
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from './Header';
import Main from './main';
import Editor from './Editor';

const GlobalStyle = createGlobalStyle`
  ${reset}
  a {
    text-decoration: none;
    color: inherit;
  }
  * {
    box-sizing: border-box;
  }
  main {
    padding: 30px;
  }
`


const theme = {

}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Editor />
    </ThemeProvider>
  )
}

export default App;
