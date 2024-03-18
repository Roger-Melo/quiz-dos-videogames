import { Timer } from '@/components/timer'
import { NextButton } from '@/components/shared/button'
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

export { Quiz }
