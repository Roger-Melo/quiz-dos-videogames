import styled, { css } from 'styled-components'
import { Button } from '@/components/shared/button'

const Questions = ({ state, userHasAnswered, onClickOption }) =>
  <div>
    <Question>{state.apiData[state.currentQuestion].question}</Question>
    <OptionsList>
      {state.apiData[state.currentQuestion].options.map((option, index) =>
        <li key={option}>
          <OptionButton onClick={() => onClickOption(index)} disabled={userHasAnswered} $state={state} $index={index} $userHasAnswered={userHasAnswered}>
            {option}
          </OptionButton>
        </li>
      )}
    </OptionsList>
  </div>

const Question = styled.h4`
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 2.4rem;
`

const OptionsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-bottom: 3.2rem;
`

const OptionButton = styled(Button)`${({ $state, $index, $userHasAnswered }) => {
  const apply = ({ correct, wrong }) => $userHasAnswered
    ? $state.apiData[$state.currentQuestion]?.correctOption === $index
      ? correct
      : wrong
    : ''

  const bgColor = { correct: 'var(--color-correct)', wrong: 'var(--color-wrong)' }
  const border = { correct: `.2rem solid ${bgColor.correct}`, wrong: `.2rem solid ${bgColor.wrong}` }
  const color = { correct: 'var(--color-dark)', wrong: 'var(--color-lightest)' }
  return css`
    transform: ${$state.clickedOption === $index ? 'translateX(2rem)' : ''};
    background-color: ${apply(bgColor)};
    border: ${apply(border)};
    color: ${apply(color)};
    width: 100%;
    text-align: left;

    &:not([disabled]):hover {
      transform: translateX(1.2rem);
    }
`}}`

export { Questions }
