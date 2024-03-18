import styled from 'styled-components'

const Progress = ({ state, maxScore, userHasAnswered }) => {
  const progressValue = userHasAnswered ? state.currentQuestion + 1 : state.currentQuestion
  return (
    <Header>
      <Label>
        <StyledProgress max={state.apiData.length} value={progressValue}>{progressValue}</StyledProgress>
        <span>Questão <b>{state.currentQuestion + 1}</b> / {state.apiData.length}</span>
        <span><b>{state.userScore}</b> / {maxScore}</span>
      </Label>
    </Header>
  )
}

const Header = styled.header`
  margin-bottom: 4rem;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.gray};

  & span:last-child {
    text-align: right;
  }
`

const Label = styled.label`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);  
`

const StyledProgress = styled.progress`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 1.2rem;
  grid-column: 1 / -1;

  &::-webkit-progress-bar {
    background-color: #d2d2d2;
    border-radius: 10rem;
  }

  &::-webkit-progress-value {
    background-color: ${({ theme }) => theme.colors.blue};
    border-radius: 10rem;
    transition: all 0.35s;
  }
`

export { Progress }
