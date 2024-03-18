import styled from 'styled-components'
import { Button } from '@/components/shared/button'

const Start = ({ state, onClickStart }) =>
  <StyledStart>
    <H2>Bem vindo(a) ao Quiz dos Videogames!</H2>
    <H3>{state.apiData.length} questões pra te testar</H3>
    <StartButton onClick={onClickStart}>Bora começar</StartButton>
  </StyledStart>

const StyledStart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const H2 = styled.h2`
  font-size: 3.6rem;
  margin-bottom: 2rem;
  text-align: center;
`

const H3 = styled.h3`
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: 4rem;
`

const StartButton = styled(Button)``

export { Start }
