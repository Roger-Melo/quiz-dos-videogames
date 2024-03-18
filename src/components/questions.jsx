import { OptionButton } from '@/components/shared/button'

const Questions = ({ state, userHasAnswered, onClickOption }) =>
  <div>
    <h4>{state.apiData[state.currentQuestion].question}</h4>
    <ul className="options">
      {state.apiData[state.currentQuestion].options.map((option, index) =>
        <li key={option}>
          <OptionButton onClick={() => onClickOption(index)} disabled={userHasAnswered} $state={state} $index={index} $userHasAnswered={userHasAnswered}>
            {option}
          </OptionButton>
        </li>
      )}
    </ul>
  </div>

export { Questions }
