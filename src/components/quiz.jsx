import styled from 'styled-components'
import { Button } from '@/components/shared/button'
import { Timer } from '@/components/timer'
import { Progress } from '@/components/progress'
import { Questions } from '@/components/questions'

const Quiz = ({ state, maxScore, onClickOption, onHandleTimer, onClickNextQuestion }) => {
  const userHasAnswered = state.clickedOption !== null
  return (
    <>
      <Progress state={state} maxScore={maxScore} userHasAnswered={userHasAnswered} />
      <Questions state={state} userHasAnswered={userHasAnswered} onClickOption={onClickOption} />
      <div>
        <Timer state={state} onHandleTimer={onHandleTimer} />
        {userHasAnswered && (
          <NextButton onClick={onClickNextQuestion}>
            {state.currentQuestion === state.apiData.length - 1 ? 'Finalizar' : 'Próxima'}
          </NextButton>
        )}
      </div>
    </>
  )
}

const NextButton = styled(Button)`
  float: right;
`

export { Quiz }
