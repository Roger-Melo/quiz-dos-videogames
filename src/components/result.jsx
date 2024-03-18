import styled from 'styled-components'
import { getResultMessage } from '@/utils/get-result-message'
import { Button } from '@/components/shared/button'

const Result = ({ state, maxScore, onClickRestart }) => {
  const resultMessage = getResultMessage({ score: state.userScore, maxScore })
  return (
    <>
      <div className="result">
        <span>{resultMessage}</span>
      </div>
      <RestartButton onClick={onClickRestart}>Reiniciar quiz</RestartButton>
    </>
  )
}

const RestartButton = styled(Button)`
  float: right;
`

export { Result }
