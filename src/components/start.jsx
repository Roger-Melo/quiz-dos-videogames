import styled from 'styled-components'
import { Button } from '@/components/shared/button'

const Start = ({ state, onClickStart }) =>
  <StyledStart>
    <h2>Bem vindo(a) ao Quiz dos Videogames!</h2>
    <h3>{state.apiData.length} questões pra te testar</h3>
    <StartButton onClick={onClickStart}>Bora começar</StartButton>
  </StyledStart>

const StyledStart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StartButton = styled(Button)``

export { Start }
