import styled from 'styled-components'
import { Start } from '@/components/start'
import { Result } from '@/components/result'
import { Quiz } from '@/components/quiz'
import { useQuiz } from '@/hooks/quiz'

const Main = () => {
  const {
    state,
    maxScore,
    handleClickStart,
    handleClickOption,
    handleClickNextQuestion,
    handleClickRestart,
    handleTimer
  } = useQuiz()

  return (
    <StyledMain>
      {state.appStatus === 'ready' && <Start state={state} onClickStart={handleClickStart} />}
      {state.appStatus === 'finished' && <Result state={state} maxScore={maxScore} onClickRestart={handleClickRestart} />}
      {state.appStatus === 'active' && state.apiData.length > 0 && (
        <Quiz
          state={state}
          maxScore={maxScore}
          onClickOption={handleClickOption}
          onHandleTimer={handleTimer}
          onClickNextQuestion={handleClickNextQuestion}
        />
      )}
    </StyledMain>
  )
}

const StyledMain = styled.main`
  width: 50rem;
`

export { Main }
