import styled, { css, createGlobalStyle, ThemeProvider } from 'styled-components'
import { Header } from '@/components/header'
import { Main } from '@/components/main'
import { theme } from '@/resources/theme'

const App = () =>
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <StyledApp>
      <Header />
      <Main />
    </StyledApp>
  </ThemeProvider>

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

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

export { App }
