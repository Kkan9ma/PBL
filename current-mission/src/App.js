import React from 'react';
import reset from "styled-reset";
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Main from './components/main';

const GlobalStyle = createGlobalStyle`
  ${reset}
  a {
    text-decoration: none;
    color: inherit;
  }
  * {
    box-sizing: border-box;
  }
`

const theme = {

}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Header />
        <Main />
    </ThemeProvider>
  )
}

export default App;
