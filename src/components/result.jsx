const Result = ({ state, maxScore, onClickRestart }) => {
  const percentage = state.userScore / maxScore * 100
  return (
    <>
      <div className="result">
        <span>Você fez <b>{state.userScore}</b> pontos de {maxScore} ({percentage}%)</span>
      </div>
      <button onClick={onClickRestart} className="btn btn-ui">Reiniciar quiz</button>
    </>
  )
}

export { Result }