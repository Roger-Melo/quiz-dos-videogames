const Progress = ({ state, maxScore, userHasAnswered }) => {
  const progressValue = userHasAnswered ? state.currentQuestion + 1 : state.currentQuestion
  return (
    <header className="progress">
      <label>
        <progress max={state.apiData.length} value={progressValue}>{progressValue}</progress>
        <span>Questão <b>{state.currentQuestion + 1}</b> / {state.apiData.length}</span>
        <span><b>{state.userScore}</b> / {maxScore}</span>
      </label>
    </header>
  )
}

export { Progress }