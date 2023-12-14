import { useEffect, useReducer } from 'react'

const reducer = (state, action) => {
  if (action.type === 'set_api_data') {
    return { ...state, apiData: action.apiData }
  }

  if (action.type === 'clicked_some_option') {
    return {
      ...state,
      clickedOption: action.index,
      userScore: action.index === state.apiData[state.currentQuestion].correctOption
        ? state.userScore + state.apiData[state.currentQuestion].points
        : state.userScore
    }
  }

  if (action.type === 'clicked_next_question') {
    const isLastQuestion = state.currentQuestion + 1 === state.apiData.length
    return {
      ...state,
      currentQuestion: isLastQuestion ? 0 : state.currentQuestion + 1,
      clickedOption: null,
      shouldShowResult: isLastQuestion
    }
  }

  if (action.type === 'clicked_restart') {
    return { ...state, userScore: 0, shouldShowResult: false }
  }

  return state
}

const initialState = { currentQuestion: 0, apiData: [], clickedOption: null, userScore: 0, shouldShowResult: false }

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Roger-Melo/fake-data/main/videogame-questions.json')
      .then(response => response.json())
      .then(apiData => dispatch({ type: 'set_api_data', apiData }))
      .catch(error => alert(error.message))
  }, [])

  const handleClickOption = index => dispatch({ type: 'clicked_some_option', index })
  const handleClickNextQuestion = () => dispatch({ type: 'clicked_next_question' })
  const handleClickRestart = () => dispatch({ type: 'clicked_restart' })
  const userHasAnswered = state.clickedOption !== null
  const maxScore = state.apiData.reduce((acc, q) => acc + q.points, 0)
  const percentage = state.userScore / maxScore * 100

  return (
    <div className="app">
      <header className="app-header">
        <img src="logo-quiz-videogames.png" alt="Logo do Quiz dos Videogames" />
        <h1>Quiz dos Videogames</h1>
      </header>
      <main className="main">
        {state.shouldShowResult && (
          <>
            <div className="result">
              <span>Você fez <b>{state.userScore}</b> pontos de {maxScore} ({percentage}%)</span>
            </div>
            <button onClick={handleClickRestart} className="btn btn-ui">Reiniciar quiz</button>
          </>
        )}
        {state.apiData.length > 0 && !state.shouldShowResult && (
          <>
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
                        onClick={() => handleClickOption(index)}
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
            <div>
              {userHasAnswered && (
                <button onClick={handleClickNextQuestion} className="btn btn-ui">
                  {state.currentQuestion === state.apiData.length - 1 ? 'Finalizar' : 'Próxima'}
                </button>
              )}
            </div>
          </>
        )}
      </main>
    </div>
  )
}

export { App }