const Questions = ({ state, userHasAnswered, onClickOption }) =>
  <div>
    <h4>{state.apiData[state.currentQuestion].question}</h4>
    <ul className="options">
      {state.apiData[state.currentQuestion].options.map((option, index) => {
        const answerClass = state.clickedOption === index ? 'answer' : ''
        const correctOrWrongClass = userHasAnswered
          ? state.apiData[state.currentQuestion]?.correctOption === index
            ? 'correct'
            : 'wrong'
          : ''

        return (
          <li key={option}>
            <button
              onClick={() => onClickOption(index)}
              className={`btn btn-option ${answerClass} ${correctOrWrongClass}`}
              disabled={userHasAnswered}
            >
              {option}
            </button>
          </li>
        )
      })}
    </ul>
  </div>

export { Questions }