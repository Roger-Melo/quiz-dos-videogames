import { useEffect, useReducer } from 'react'
import { Header } from '@/components/header'

const secondsPerQuestion = 30

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
    const wasLastQuestion = state.currentQuestion + 1 === state.apiData.length
    return {
      ...state,
      currentQuestion: wasLastQuestion ? 0 : state.currentQuestion + 1,
      clickedOption: null,
      appStatus: wasLastQuestion ? 'finished' : state.appStatus,
      seconds: wasLastQuestion ? null : state.seconds
    }
  }

  if (action.type === 'clicked_restart') {
    return { ...state, userScore: 0, appStatus: 'ready', currentQuestion: 0, clickedOption: null }
  }

  if (action.type === 'clicked_start') {
    return { ...state, appStatus: 'active', seconds: secondsPerQuestion * state.apiData.length }
  }

  if (action.type === 'tick') {
    return {
      ...state,
      seconds: state.seconds === 0 ? null : state.seconds - 1,
      appStatus: state.seconds === 0 ? 'finished' : state.appStatus
    }
  }

  return state
}

const Timer = ({ state }) => {
  const mins = Math.floor(state.seconds / 60)
  const secs = state.seconds % 60
  return <div className="timer">{mins < 10 ? `0${mins}` : mins}:{secs < 10 ? `0${secs}` : secs}</div>
}

const Start = ({ state, onClickStart }) =>
  <div className="start">
    <h2>Bem vindo(a) ao Quiz dos Videogames!</h2>
    <h3>{state.apiData.length} questões pra te testar</h3>
    <button onClick={onClickStart} className="btn">Bora começar</button>
  </div>

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

const ButtonNext = ({ state, onClickNextQuestion }) =>
  <button onClick={onClickNextQuestion} className="btn btn-ui">
    {state.currentQuestion === state.apiData.length - 1 ? 'Finalizar' : 'Próxima'}
  </button>

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

const initialState = { currentQuestion: 0, apiData: [], clickedOption: null, userScore: 0, appStatus: 'ready', seconds: null }

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Roger-Melo/fake-data/main/videogame-questions.json')
      .then(response => response.json())
      .then(apiData => dispatch({ type: 'set_api_data', apiData }))
      .catch(error => alert(error.message))
  }, [])

  useEffect(() => {
    if (state.seconds === null) {
      return
    }

    const id = setTimeout(() => dispatch({ type: 'tick' }), 1000)
    return () => clearTimeout(id)
  }, [state.seconds])

  const handleClickStart = () => dispatch({ type: 'clicked_start' })
  const handleClickOption = index => dispatch({ type: 'clicked_some_option', index })
  const handleClickNextQuestion = () => dispatch({ type: 'clicked_next_question' })
  const handleClickRestart = () => dispatch({ type: 'clicked_restart' })
  const userHasAnswered = state.clickedOption !== null
  const maxScore = state.apiData.reduce((acc, q) => acc + q.points, 0)

  return (
    <div className="app">
      <Header />
      <main className="main">
        {state.appStatus === 'ready' && <Start state={state} onClickStart={handleClickStart} />}
        {state.appStatus === 'finished' && <Result state={state} maxScore={maxScore} onClickRestart={handleClickRestart} />}
        {state.appStatus === 'active' && state.apiData.length > 0 && (
          <>
            <Progress state={state} maxScore={maxScore} userHasAnswered={userHasAnswered} />
            <Questions state={state} userHasAnswered={userHasAnswered} onClickOption={handleClickOption} />
            <div>
              <Timer state={state} />
              {userHasAnswered && <ButtonNext state={state} onClickNextQuestion={handleClickNextQuestion} />}
            </div>
          </>
        )}
      </main>
    </div>
  )
}

export { App }