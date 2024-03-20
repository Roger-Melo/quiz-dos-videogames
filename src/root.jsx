import { css, createGlobalStyle, ThemeProvider } from 'styled-components'
import { App } from '@/app'
import { theme } from '@/resources/theme'

const Root = () =>
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>

const GlobalStyle = createGlobalStyle`${({ theme }) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  body {
    min-height: 100vh;
    color: ${theme.colors.gray};
    background-color: ${theme.colors.white};
    padding: 3.2rem;
  }

  ul {
    list-style: none;
  }
`}`

export { Root }
