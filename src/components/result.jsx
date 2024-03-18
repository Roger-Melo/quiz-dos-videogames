import { getResultMessage } from '@/utils/get-result-message'
import { RestartButton } from '@/components/shared/button'

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

export { Result }
