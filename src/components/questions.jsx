import styled, { css } from 'styled-components'
import { Button } from '@/components/shared/button'

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

const OptionButton = styled(Button)`${({ $state, $index, $userHasAnswered }) => {
  const apply = ({ correct, wrong }) => $userHasAnswered
    ? $state.apiData[$state.currentQuestion]?.correctOption === $index
      ? correct
      : wrong
    : ''

  return css`
    transform: ${$state.clickedOption === $index ? 'translateX(2rem)' : ''};
    background-color: ${apply({ correct: 'var(--color-correct)', wrong: 'var(--color-wrong)' })};
    border: ${apply({ correct: '2px solid var(--color-correct)', wrong: '2px solid var(--color-wrong)' })};
    color: ${apply({ correct: 'var(--color-dark)', wrong: 'var(--color-lightest)' })};
    width: 100%;
    text-align: left;

    &:not([disabled]):hover {
      transform: translateX(1.2rem);
    }
`}}`

export { Questions }
