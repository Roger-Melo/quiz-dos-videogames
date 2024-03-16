import { createGlobalStyle } from 'styled-components'
import { Header } from '@/components/header'
import { Timer } from '@/components/timer'
import { Start } from '@/components/start'
import { Result } from '@/components/result'
import { ButtonNext } from '@/components/button-next'
import { Progress } from '@/components/progress'
import { Questions } from '@/components/questions'
import { useQuiz } from '@/hooks/quiz'

const App = () => {
  const {
    state,
    userHasAnswered,
    maxScore,
    handleClickStart,
    handleClickOption,
    handleClickNextQuestion,
    handleClickRestart,
    handleTimer
  } = useQuiz()

  return (
    <>
      <GlobalStyle />
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
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  body {
    min-height: 100vh;
    color: var(--color-dark);
    background-color: var(--color-lightest);
    padding: 3.2rem;
  }
`

export { App }
