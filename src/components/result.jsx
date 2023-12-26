import { getResultMessage } from '@/utils/get-result-message'

const Result = ({ state, maxScore, onClickRestart }) => {
  const resultMessage = getResultMessage({ score: state.userScore, maxScore })
  return (
    <>
      <div className="result">
        <span>{resultMessage}</span>
      </div>
      <button onClick={onClickRestart} className="btn btn-ui">Reiniciar quiz</button>
    </>
  )
}

export { Result }