import styled from 'styled-components'
import { getResultMessage } from '@/utils/get-result-message'
import { Button } from '@/components/shared/button'

const Result = ({ state, maxScore, onClickRestart }) => {
  const resultMessage = getResultMessage({ score: state.userScore, maxScore })
  return (
    <>
      <Message>{resultMessage}</Message>
      <RestartButton onClick={onClickRestart}>Reiniciar quiz</RestartButton>
    </>
  )
}

const RestartButton = styled(Button)`
  float: right;
`

const Message = styled.div`
  background-color: var(--color-theme);
  color: var(--color-dark);
  border-radius: 10rem;
  text-align: center;
  padding: 2rem 0;
  font-size: 2.2rem;
  font-weight: 500;
  margin-bottom: 1.6rem;
`

export { Result }
