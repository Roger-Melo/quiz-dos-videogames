import styled from 'styled-components'

const Start = ({ state, onClickStart }) =>
  <StyledStart>
    <h2>Bem vindo(a) ao Quiz dos Videogames!</h2>
    <h3>{state.apiData.length} questões pra te testar</h3>
    <button onClick={onClickStart} className="btn">Bora começar</button>
  </StyledStart>

const StyledStart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export { Start }
