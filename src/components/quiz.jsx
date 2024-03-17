import { Timer } from '@/components/timer'
import { ButtonNext } from '@/components/button-next'
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
        {userHasAnswered && <ButtonNext state={state} onClickNextQuestion={onClickNextQuestion} />}
      </div>
    </>
  )
}

export { Quiz }
