import { useEffect, useReducer, useCallback } from 'react'
import { Header } from '@/components/header'
import { Timer } from '@/components/timer'
import { Start } from '@/components/start'
import { Result } from '@/components/result'
import { ButtonNext } from '@/components/button-next'
import { Progress } from '@/components/progress'
import { Questions } from '@/components/questions'

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
      appStatus: wasLastQuestion ? 'finished' : state.appStatus
    }
  }

  if (action.type === 'clicked_restart') {
    return { ...state, userScore: 0, appStatus: 'ready', currentQuestion: 0, clickedOption: null }
  }

  if (action.type === 'clicked_start') {
    return { ...state, appStatus: 'active' }
  }

  if (action.type === 'game_over') {
    return { ...state, appStatus: 'finished' }
  }

  return state
}

const initialState = { currentQuestion: 0, apiData: [], clickedOption: null, userScore: 0, appStatus: 'ready' }

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Roger-Melo/fake-data/main/videogame-questions.json')
      .then(response => response.json())
      .then(apiData => dispatch({ type: 'set_api_data', apiData }))
      .catch(error => alert(error.message))
  }, [])

  const handleClickStart = () => dispatch({ type: 'clicked_start' })
  const handleClickOption = index => dispatch({ type: 'clicked_some_option', index })
  const handleClickNextQuestion = () => dispatch({ type: 'clicked_next_question' })
  const handleClickRestart = () => dispatch({ type: 'clicked_restart' })
  const handleTimer = useCallback(({ message }) => dispatch({ type: message }), [])
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
              <Timer state={state} onHandleTimer={handleTimer} />
              {userHasAnswered && <ButtonNext state={state} onClickNextQuestion={handleClickNextQuestion} />}
            </div>
          </>
        )}
      </main>
    </div>
  )
}

export { App }