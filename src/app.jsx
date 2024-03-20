import styled from 'styled-components'
import { Header } from '@/components/header'
import { Main } from '@/components/main'

const App = () =>
  <StyledApp>
    <Header />
    <Main />
  </StyledApp>

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export { App }
